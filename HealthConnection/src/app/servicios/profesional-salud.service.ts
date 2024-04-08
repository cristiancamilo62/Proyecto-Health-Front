import { Injectable } from '@angular/core';
import { ProfesionalSalud } from '../agenda/agenda';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalSaludService {

  private url : string =  "http://localhost:8080/health/api/v1/profesional";

  constructor(private http:HttpClient) { }

 
  consultarProfesional(profesional:ProfesionalSalud):Observable<{datos:[ProfesionalSalud],mensajes:[]}>{
    return this.http.post<{datos:[ProfesionalSalud],mensajes:[]}>(this.url+'/consultar',profesional) 
  }
}
