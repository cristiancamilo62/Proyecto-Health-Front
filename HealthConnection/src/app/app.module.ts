import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './servicios/auth.service';
import { AgendaCitaComponent } from './agenda-cita/agenda-cita.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultarPerfilComponent } from './perfil/consultar-perfil/consultar-perfil.component';
import { ActualizarPerfilComponent } from './perfil/actualizar-perfil/actualizar-perfil.component';
import { FormPacienteComponent } from './perfil/form-paciente/form-paciente.component';
import { CalenderComponent } from './calender/calender.component';
import { CommonModule } from '@angular/common';



const routes: Routes = [
  { path: '', redirectTo:'/principal' ,pathMatch:'full' },
  { path: 'principal/login', component: LoginComponent },
  { path: 'principal/login/form', component: FormPacienteComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'principal/editarPerfil/:id', component: ActualizarPerfilComponent },
  { path: 'principal/agendarCita', component: AgendaCitaComponent },
  { path: 'principal/consultarPerfil/:id', component: ConsultarPerfilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    AgendaCitaComponent,
    ConsultarPerfilComponent,
    ActualizarPerfilComponent,
    FormPacienteComponent,
    CalenderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    ModalModule.forRoot(), 
    BrowserAnimationsModule,
    FontAwesomeModule,
    CommonModule ,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }