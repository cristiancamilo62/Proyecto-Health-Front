import { Injectable } from '@angular/core';
import { PacienteService } from './paciente.service';
import { Paciente } from '../login/paciente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly LS_KEY = 'authState';

  loggedIn: boolean = false;
  paciente: Paciente | null = null;

  constructor(private pacienteservice: PacienteService) {
    const storedAuthState = localStorage.getItem(this.LS_KEY);
    if (storedAuthState) {
      const authState = JSON.parse(storedAuthState);
      this.loggedIn = authState.loggedIn;
      this.paciente = authState.paciente;
    }
  }

  login(paciente: Paciente): Promise<boolean> {
    return new Promise((resolve) => {
      this.pacienteservice.getCredenciales(paciente).subscribe(
        (response) => {
          if (response.datos) {
            this.loggedIn = true;
            this.paciente = response.datos[0];
            this.saveAuthState();
            resolve(this.loggedIn);
          } else {
            resolve(false);
          }
        },
        (error) => {
          alert(error.error.mensajes[0]);
          resolve(false);
        }
      );
    });
  }

  logout(): void {
    this.loggedIn = false;
    this.paciente = null;
    this.saveAuthState();
  }

  private saveAuthState(): void {
    const authState = {
      loggedIn: this.loggedIn,
      paciente: this.paciente
    };
    localStorage.setItem(this.LS_KEY, JSON.stringify(authState));
  }

  }
