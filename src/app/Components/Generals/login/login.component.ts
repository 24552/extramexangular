import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SConexionService } from 'src/app/Services/sconexion.service';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Classes/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form_login: FormGroup;
  public builder = new FormBuilder();
  public json= {};
  constructor(private servicio: SConexionService, private router:Router) {
    this.form_login = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }

  ngOnInit() {
    
  }
  
  public submit(){
    const url = 'http://192.168.137.210:3333/login';
    const header = new HttpHeaders().set('Content-type', 'application/json');
    this.json = JSON.stringify({username: this.form_login.value.username, password: this.form_login.value.password});
    
    return this.servicio.postData(url,this.json,header).subscribe((res: User) =>{
      localStorage.setItem('token',res.verify);
      localStorage.setItem('tipo', res.tipo);
      localStorage.setItem('usuario',res.username)
      if(localStorage.getItem('tipo')==='admin'){
        this.router.navigate(['admin']);
      } else {
        this.router.navigate(['jugador']);
      }
      alert('Bienvenido '+res.username);
      // this.router.navigate(['']);
      
    });
  }
}
