import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import { Tarefa } from '../../models/Tarefas';
import { ExcluirComponent } from '../../components/excluir/excluir.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  Tarefas: Tarefa[] = [];
  TarefasGeral: Tarefa[] = [];
  columnsToDisplay = ['Nome', 'Situação', 'Início', 'Conclusão', 'Responsável', 'Ações', 'Excluir'];


  constructor(private TarefaService : TarefaService, public matDialog: MatDialog) { }


  ngOnInit(): void {
    this.TarefaService.GetTarefas().subscribe((data) => {
      const dados = data.dados;
       dados.map((item) => {
         item.dataInicio = new Date(item.dataInicio!).toLocaleDateString('pt-BE');
         item.dataConclusao = new Date(item.dataConclusao!).toLocaleDateString('pt-BE');
       });

      this.TarefasGeral = dados;
      this.Tarefas = dados;

    })
  }



  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.Tarefas = this.TarefasGeral.filter(Tarefa => {
      return Tarefa.nome.toLowerCase().includes(value);
    })
  }


  openDialog(id : number){
    this.matDialog.open(ExcluirComponent,{
      width: '350px',
      height: '350px',
      data: {
        id: id
      }
    })
  }


}



