import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Components/Generals/inicio/inicio.component';

import { LoginComponent } from './Components/Generals/login/login.component';

import { JugadorComponent } from './Components/Jugador/jugador/jugador.component';
import { ErrorComponent } from './Components/Generals/error/error.component';
import { AdminComponent } from './Components/Administrador/admin/admin.component';

import { CrearusuarioComponent } from './Components/Administrador/crearusuario/crearusuario.component';
import { JuegoComponent } from './Components/juego/juego.component';
import { CrearPartidaComponent } from './Components/Administrador/crear-partida/crear-partida.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { RolGuard } from './guards/rol.guard';
import { JugadorGuard } from './guards/jugador.guard';
import { EsperaComponent } from './Components/Jugador/espera/espera.component';
const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
  {path: 'jugador', component: JugadorComponent, canActivate:[AuthGuard,JugadorGuard]},
  {path: 'admin', component: AdminComponent, canActivate:[AuthGuard,RolGuard]},
  {path: 'crearusuario', component:CrearusuarioComponent, canActivate:[AuthGuard,RolGuard]},
  { path:'crearpartida',component:CrearPartidaComponent, canActivate:[AuthGuard,RolGuard]},
  {path: 'juego', component:JuegoComponent, canActivate:[AuthGuard]},
  {path: 'espera', component:EsperaComponent, canActivate:[AuthGuard]},
  
  {path: '**', component: ErrorComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*{path: '', component: InicioComponent, canActivate:[AuthGuard]},
{path: 'login', component: LoginComponent, canActivate:[LoginGuard]},
{path: 'jugador', component: JugadorComponent, canActivate:[AuthGuard,JugadorGuard]},
{path: 'admin', component: AdminComponent, canActivate:[AuthGuard,RolGuard]},
{path: 'crearusuario', component:CrearusuarioComponent, canActivate:[AuthGuard,RolGuard]},
{path: 'crearpartida', component:CrearPartidaComponent, canActivate:[AuthGuard,RolGuard]},
{path: 'juego', component:JuegoComponent, canActivate:[AuthGuard]},
{path: '**', component: ErrorComponent},*/




/*{path: 'inicio', component: InicioComponent},
{path: 'login', component: LoginComponent},
{path: 'jugador', component: JugadorComponent},
{path: 'admin', component: AdminComponent},
{path: 'crearusuario', component:CrearusuarioComponent},
{path: 'crearpartida', component:CrearPartidaComponent},
{path: 'juego', component:JuegoComponent},
{path: '**', component: ErrorComponent},
];*/