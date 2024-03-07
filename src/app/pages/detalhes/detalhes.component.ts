import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa-service.service';
import { Tarefa } from 'src/app/models/Tarefas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

   Tarefa?: Tarefa;
   id!:number;

  constructor(private TarefaService: TarefaService, private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {

      this.id =  Number(this.route.snapshot.paramMap.get("id"));

      this.TarefaService.GetTarefa( this.id).subscribe((data) => {
         const dados = data.dados;
         dados.dataInicio = new Date(dados.dataInicio!).toLocaleDateString("pt-BR");
         dados.dataConclusao = new Date(dados.dataConclusao!).toLocaleDateString("pt-BR");
         dados.situacao = dados.situacao;

         this.Tarefa = dados;
      });
  }
}
