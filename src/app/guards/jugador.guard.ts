import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JugadorGuard implements CanActivate {
  
  constructor(private router:Router){ }
   
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem('tipo') === 'jugador'){
        
        return true;
    } 
    alert('Acceso Denegado. tiene que entrar como jugador')
    return false;
  }
}
