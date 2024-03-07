import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarefa } from 'src/app/models/Tarefas';
import { TarefaService } from 'src/app/services/tarefa-service.service';

@Component({
  selector: 'app-Tarefa-form',
  templateUrl: './tarefa-form.component.html',
  styleUrls: ['./tarefa-form.component.css']
})
export class TarefaFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Tarefa>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input()  dadosTarefa: Tarefa | null = null;

  TarefaForm!: FormGroup;

  constructor(private TarefaService : TarefaService, private router: Router) {
  }


  ngOnInit(): void {
    

    this.TarefaForm = new FormGroup ({
      id: new FormControl(this.dadosTarefa ? this.dadosTarefa.id : 0),
      nome: new FormControl(this.dadosTarefa ? this.dadosTarefa.nome : '', [Validators.required]),
      descricao: new FormControl(this.dadosTarefa ? this.dadosTarefa.descricao : '', [Validators.required]),
      responsavel: new FormControl(this.dadosTarefa ? this.dadosTarefa.responsavel : '', [Validators.required]),
      dataInicio: new FormControl(this.dadosTarefa ? this.dadosTarefa.dataInicio : new Date(), [Validators.required]),
      dataConclusao: new FormControl(this.dadosTarefa ? this.dadosTarefa.dataConclusao : new Date(), [Validators.required]),
      situacao: new FormControl(this.dadosTarefa ? this.dadosTarefa.situacao : '', [Validators.required])     
    });
    
    
  }

  submit(){

      console.log(this.TarefaForm.value)
      
      this.onSubmit.emit(this.TarefaForm.value);
  }

}
