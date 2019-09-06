import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SConexionService } from './Services/sconexion.service';
import { NavbarComponent } from './Components/Generals/navbar/navbar.component';
import { ErrorComponent } from './Components/Generals/error/error.component';
import { InicioComponent } from './Components/Generals/inicio/inicio.component';
import { LoginComponent } from './Components/Generals/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './Components/Administrador/admin/admin.component';
import { JugadorComponent } from './Components/Jugador/jugador/jugador.component';
import { CrearusuarioComponent } from './Components/Administrador/crearusuario/crearusuario.component';
import { JuegoComponent } from './Components/juego/juego.component';
import { CrearPartidaComponent } from './Components/Administrador/crear-partida/crear-partida.component';
import { EsperaComponent } from './Components/Jugador/espera/espera.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ErrorComponent,
    LoginComponent,
    AdminComponent,
    JugadorComponent,
    CrearusuarioComponent,
    JuegoComponent,
    CrearPartidaComponent,
    EsperaComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SConexionService
  ],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppModule { }
