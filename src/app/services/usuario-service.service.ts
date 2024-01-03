import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/Usuarios';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = `${environment.baseApiUrl}/Usuario`

  constructor(private http: HttpClient) { }


  GetUsuarios() : Observable<Response<Usuario[]>> {
      return this.http.get<Response<Usuario[]>>(this.apiUrl);
  }

  GetUsuario(id: number) : Observable<Response<Usuario>> {
    return this.http.get<Response<Usuario>>(`${this.apiUrl}/${id}`);
  }

  CreateUsuario(Usuario: Usuario) : Observable<Response<Usuario[]>> {
    return this.http.post<Response<Usuario[]>>(`${this.apiUrl}`, Usuario);
  }

  EditUsuario(Usuario : Usuario) : Observable<Response<Usuario[]>> {
      return this.http.put<Response<Usuario[]>>(`${this.apiUrl}`, Usuario);
  }

  ExcluirUsuario(id: number) : Observable<Response<Usuario[]>>{
    return this.http.delete<Response<Usuario[]>>(`${this.apiUrl}?id=${id}`)
  }
}
