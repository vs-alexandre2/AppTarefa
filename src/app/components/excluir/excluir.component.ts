import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefas';
import { TarefaService } from 'src/app/services/tarefa-service.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit{

  inputdata:any
  Tarefa!: Tarefa;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private TarefaService: TarefaService, private router: Router, private ref:MatDialogRef<ExcluirComponent>){}

  ngOnInit(): void {
      this.inputdata = this.data;

      this.TarefaService.GetTarefa(this.inputdata.id).subscribe(data => {
          this.Tarefa = data.dados;
      });
  }

  excluir(){
    this.TarefaService.ExcluirTarefa(this.inputdata.id).subscribe(data => {
       this.ref.close();
       window.location.reload();
    });
  }

  voltar(){  
       this.ref.close();
       window.location.reload();
  }

}
