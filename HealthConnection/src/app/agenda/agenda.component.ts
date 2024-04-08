import { Component, Inject, OnInit } from '@angular/core';
import { AgendaService } from '../servicios/agenda.service';
import { Router } from '@angular/router';
import { Agenda, ProfesionalSalud } from './agenda';
import { ProfesionalSaludService } from '../servicios/profesional-salud.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit{

  profesionalesDeSalud: ProfesionalSalud[] = [];

  agenda:Agenda = new Agenda();



  constructor(private agendaservice:AgendaService,private profesinalService : ProfesionalSaludService, @Inject(Router) private router:Router){}
  
  ngOnInit(): void {
  }
  registrarCita():void{
    this.agendaservice.registrar(this.agenda).subscribe(
      response=>{
       if(response){
         alert(response.mensajes[0])
      }
    },
    (error)=>{
        alert(error.error.mensajes[0])
    }
    );

  }
  consultar(): void {
    this.profesinalService.consultarProfesional(this.agenda.profesionalSalud).subscribe(
      response => {
        console.log(response)
        this.profesionalesDeSalud = response.datos;
      },
      error => {
        alert(error.mensajes);
      }
    );
  }


}
