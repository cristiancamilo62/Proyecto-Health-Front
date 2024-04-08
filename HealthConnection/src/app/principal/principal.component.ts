import { Component, Inject, OnInit } from '@angular/core';
import { Paciente } from '../clases/paciente';
import { PacienteService } from '../servicios/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  paciente: Paciente = new Paciente();
  id: string = '';
  idPacienteRegistrado:string|undefined;
  isMenuOpen = false;
  isMenuOpenPerfil = false;
  isMenuOpenAgenda = false;
  isLoggedIn:boolean|undefined ;

  imagesBuffer1: string[] = ['assets/buffer1.jpeg', 'assets/buffer2.jpeg', 'assets/buffer3.jpeg'];
  imagesBuffer2: string[] = ['assets/buffer4.jpeg'];

  constructor(
    private pacienteService: PacienteService,
    @Inject(Router) private router: Router,
    @Inject(ActivatedRoute) private activeRoute: ActivatedRoute,
    private authservice: AuthService
  ) {}

  ngOnInit(): void {
    this.idPacienteRegistrado =  this.authservice.paciente?.id;
    }

 

  eliminar(): void {
    if (confirm('¿Seguro que desea eliminar esta cuenta permanentemente?')) {
      this.pacienteService.deleteP(this.id).subscribe(
        (response) => {
          alert('Se ha eliminado la cuenta permanentemente');
          this.authservice.logout();
          this.router.navigate(['principal/']);

        },
        (error) => {
          alert('Error al eliminar la cuenta. Inténtelo nuevamente.');
          console.error('Error al eliminar al paciente:', error);
        }
      );
    }
  }

  toggleMenu() {
    this.isMenuOpenPerfil = !this.isMenuOpenPerfil;
  }

  toggleMenuS() {
    this.isMenuOpenAgenda = !this.isMenuOpenAgenda;
  }

  logout(): void {
    if (confirm('¿Estás seguro de cerrar la sesión?')) {
      this.authservice.logout();
      this.router.navigate(['principal/']);
    }
  }

  toggleMenuOption(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  getImagesBuffer1(): string[] {
    return this.imagesBuffer1;
  }

  getImagesBuffer2(): string[] {
    return this.imagesBuffer2;
  }

  loggedIn(): boolean {
    return this.authservice.loggedIn;
  }

  verificarCita(): boolean{
    if(!this.loggedIn()){
      alert("Primero debes registrarte");
      }
      return this.loggedIn();
  }
}
