import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor(public ruter: Router) { }

  ngOnInit() {
  
  }

  sesion(): boolean{
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }

  salir(){
    localStorage.removeItem('token');
    this.ruter.navigate(['inicio']);
  }
  crearusuario(){
    this.ruter.navigate(['registrar']);
  
  }

}

