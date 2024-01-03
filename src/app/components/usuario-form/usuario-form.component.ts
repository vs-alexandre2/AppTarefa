import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Usuario>();
  @Input() btnAcao!: string;
  @Input() btnTitulo!: string;
  @Input()  dadosUsuario: Usuario | null = null;

  UsuarioForm!: FormGroup;
  dataAtual = new Date();
  maxDate = new Date(this.dataAtual.getFullYear() - 15, this.dataAtual.getMonth(), this.dataAtual.getDate());

  constructor(private UsuarioService : UsuarioService, private router: Router) {
  }


  ngOnInit(): void {
    

    this.UsuarioForm = new FormGroup ({
      id: new FormControl(this.dadosUsuario ? this.dadosUsuario.id : 0),
      nome: new FormControl(this.dadosUsuario ? this.dadosUsuario.nome : '', [Validators.required]),
      sobrenome: new FormControl(this.dadosUsuario ? this.dadosUsuario.sobrenome : '', [Validators.required]),
      email: new FormControl(this.dadosUsuario ? this.dadosUsuario.email : '', [Validators.required, Validators.email]),
      dataNascimento: new FormControl(this.dadosUsuario ? this.dadosUsuario.dataNascimento : new Date(this.maxDate), [Validators.required]),
      escolaridade: new FormControl(this.dadosUsuario ? this.dadosUsuario.escolaridade : '', [Validators.required])     
    });
    
  }


  get nome(){
    return this.UsuarioForm.get('nome')!;
  }

  submit(){

      console.log(this.UsuarioForm.value)

      this.onSubmit.emit(this.UsuarioForm.value);
  }

}
