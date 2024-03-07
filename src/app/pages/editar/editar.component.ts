import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefas';
import { TarefaService } from 'src/app/services/tarefa-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  btnTitulo = "Editar Tarefa";
  Tarefa!: Tarefa;

  constructor(private TarefaService : TarefaService, private router :Router,  private route : ActivatedRoute) {


  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.TarefaService.GetTarefa(id).subscribe((data) => {
        this.Tarefa = data.dados;

    });
  }

  async editTarefa(Tarefa : Tarefa){

      this.TarefaService.EditTarefa(Tarefa).subscribe(data => {
        this.router.navigate(['/']);
      });

  }

}
