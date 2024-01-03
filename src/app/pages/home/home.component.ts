import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario-service.service';
import { Usuario } from '../../models/Usuarios';
import { ExcluirComponent } from '../../components/excluir/excluir.component'
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  Usuarios: Usuario[] = [];
  UsuariosGeral: Usuario[] = [];
  columnsToDisplay = ['Nome', 'Sobrenome', 'E-mail', 'Ações', 'Excluir'];


  constructor(private UsuarioService : UsuarioService, public matDialog: MatDialog) { }


  ngOnInit(): void {
    this.UsuarioService.GetUsuarios().subscribe((data) => {
      const dados = data.dados;
       dados.map((item) => {
         item.dataNascimento = new Date(item.dataNascimento!).toLocaleDateString('pt-BE');
       });

      this.UsuariosGeral = dados;
      this.Usuarios = dados;

    })
  }



  search(event : Event){
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.Usuarios = this.UsuariosGeral.filter(Usuario => {
      return Usuario.nome.toLowerCase().includes(value);
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



