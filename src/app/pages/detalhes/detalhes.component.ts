import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Usuario } from 'src/app/models/Usuarios';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit{

   Usuario?: Usuario;
   id!:number;

  constructor(private UsuarioService: UsuarioService, private route: ActivatedRoute, private router : Router) {

  }

  ngOnInit(): void {

      this.id =  Number(this.route.snapshot.paramMap.get("id"));

      this.UsuarioService.GetUsuario( this.id).subscribe((data) => {
         const dados = data.dados;
         dados.dataNascimento = new Date(dados.dataNascimento!).toLocaleDateString("pt-BR");
         dados.escolaridade = "Ensino " + dados.escolaridade;

         this.Usuario = dados;
      });
  }
}
