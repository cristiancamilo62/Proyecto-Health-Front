import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda, ProfesionalSalud } from '../agenda/agenda';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private url : string =  "http://localhost:8080/health/api/v1/agenda";

  constructor(private http:HttpClient) { }

  registrar(agenda:Agenda):Observable<{datos:[Agenda],mensajes:[string]}>{
    return this.http.post<{datos:[Agenda],mensajes:[string]}>(this.url,agenda) 
 } 
}