import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroCitasComponent } from './registro-citas/registro-citas.component';
import { FormcitaComponent } from './registro-citas/formcita/formcita.component';
import { PrincipalComponent } from './principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './servicios/auth.service';
import { AgendaComponent } from './agenda/agenda.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsultarPerfilComponent } from './consultar-perfil/consultar-perfil.component';
import { EliminarPerfilComponent } from './eliminar-perfil/eliminar-perfil.component';
import { ActualizarPerfilComponent } from './actualizar-perfil/actualizar-perfil.component';
import { FormPacienteComponent } from './form-paciente/form-paciente.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  { path: '', redirectTo:'/principal' ,pathMatch:'full' },
  { path: 'principal/login', component: LoginComponent },
  { path: 'principal/login/form', component: FormPacienteComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'principal/editarPerfil/:id', component: ActualizarPerfilComponent },
  { path: 'principal/agendarCita', component: AgendaComponent },
  { path: 'principal/consultarPerfil/:id', component: ConsultarPerfilComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroCitasComponent,
    FormcitaComponent,
    PrincipalComponent,
    AgendaComponent,
    ConsultarPerfilComponent,
    EliminarPerfilComponent,
    ActualizarPerfilComponent,
    FormPacienteComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forRoot(routes),
    ModalModule.forRoot(), 
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }