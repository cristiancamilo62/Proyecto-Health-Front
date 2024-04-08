import { Component, Inject, OnInit } from '@angular/core';
import { Paciente } from '../../clases/paciente';
import { PacienteService } from '../../servicios/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente();

  titulo:string="CREATE NEW ACCOUNT";
  mensaje:string="";

  constructor(private pacienteservice: PacienteService, @Inject(Router) private router:Router){}
  
  ngOnInit(): void {
  }

  create(): void{
    this.pacienteservice.create(this.paciente).subscribe(
      (response)=>{
        alert("su registro a sido exitoso")
        this.router.navigate(['/login'])
      },
   (error) => {
      if (error.error && error.error.mensajes && error.error.mensajes.length > 0) {
      alert(error.error.mensajes[0])
      this.mensaje= error.error.mensajes[0];
    }
  }
    );
    
  }

}



