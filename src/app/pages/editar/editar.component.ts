import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuarios';
import { UsuarioService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  btnAcao = "Editar";
  btnTitulo = "Editar Usuário";
  Usuario!: Usuario;

  constructor(private UsuarioService : UsuarioService, private router :Router,  private route : ActivatedRoute) {


  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.UsuarioService.GetUsuario(id).subscribe((data) => {
        this.Usuario = data.dados;

    });
  }

  async editUsuario(Usuario : Usuario){

      this.UsuarioService.EditUsuario(Usuario).subscribe(data => {
        this.router.navigate(['/']);
      });

  }

}
