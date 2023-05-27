import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/personal';

@Injectable({
  providedIn: 'root',
})
export class PersonalService {
  BASE_URL: string = 'http://localhost:4300';

  constructor(private http: HttpClient) {}
  //Consular todo el personal
  getPersonal(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.BASE_URL}/listar-personal`);
  }
  //Crear un nuevo usuario
  crearPersonal(persona: Persona): Observable<any> {
    console.log(persona);
    return this.http.post<any>(`${this.BASE_URL}/crear-personal`,persona);
  }
  //Consultar Personal por Id
  getPersonalPorId(id: string): Observable<Persona>{
    return this.http.get<Persona>(`${this.BASE_URL}/listar-personal/id/${id}`);
  }
  //Eliminar el Usuario
  deleteUsaurio(id: string): Observable<Persona>{
    return this.http.delete<Persona>(`${this.BASE_URL}/eliminar-personal/${id}`);
  }
  //Actualizar Los datos del Usuario
  updateUsuario(id: string, data:Persona): Observable<Persona>{
    return this.http.put<Persona>(`${this.BASE_URL}/eliminar-personal/${id}`,data);
  }

}
