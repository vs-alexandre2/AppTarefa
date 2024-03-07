import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefas';
import { TarefaService } from 'src/app/services/tarefa-service.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  btnAcao = "Cadastrar";
  btnTitulo = "Cadastrar Tarefa";

  constructor(private TarefaService : TarefaService, private router: Router) {
  }

  ngOnInit(): void {
  }

  createTarefa(Tarefa: Tarefa){

       this.TarefaService.CreateTarefa(Tarefa).subscribe((data) => {
          this.router.navigate(['/']);
       })
  }



}
