import { Component, Inject, OnInit, inject } from '@angular/core';
import { Paciente } from './paciente';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  faLock = faLock;
 
  paciente:Paciente = new Paciente();

  constructor(private autService: AuthService,@Inject(Router) private router: Router) { }

  ngOnInit(): void { 
  }

  getCredenciales(): void {
    this.autService.login(this.paciente).then((isLoggedIn) => {
      if (isLoggedIn) {
        alert("Bienvenido");
        this.router.navigate(['principal']);
      }
    })
    .catch((error) => {
      console.log(error.error);
     });
  }

    
}

