import { Component, Inject, OnInit } from '@angular/core';
import { PacienteService } from '../../servicios/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../../clases/paciente';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.component.html',
  styleUrls: ['./actualizar-perfil.component.css']
})
export class ActualizarPerfilComponent implements OnInit{
    
  title:string="Edit Profile";

  paciente: Paciente = new Paciente();

  id:string='';
  
  constructor(private pacienteService:PacienteService,
    @Inject(Router) private router:Router,
    @Inject(ActivatedRoute) private activedRouted:ActivatedRoute){};
  
  
  ngOnInit(): void {
    this.cargar();
    
  }

  cargar():void {
    this.activedRouted.params.subscribe(
      pa=>{
        this.id = pa['id'];
        if(this.id){
          this.paciente.id = this.id;
          this.pacienteService.getPaciente(this.paciente).subscribe(
            response=>this.paciente=response.datos[0]
          );
          }
        }
    );
  }

  actualizar(): void{
    this.pacienteService.update(this.paciente,this.paciente.id).subscribe(
      response=>{
          if(response){
            alert("se ha actualizado el paciente")}
            this.router.navigate(['principal/',]);
        },
        (error)=>{
          alert("A sucedido un error tratando de actualizar su cuenta")
        }
           
      );


  }

}
