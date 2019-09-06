import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SConexionService } from 'src/app/Services/sconexion.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.css']
})
export class CrearusuarioComponent implements OnInit {
  public formcrearusuario: FormGroup;
  public builder = new FormBuilder();
  public json= {};


  constructor(private servicio: SConexionService, private router:Router) {
    this.formcrearusuario = this.builder.group({
      username: ['', Validators.required],
       password: ['', Validators.required],
       email: ['', [Validators.required,Validators.email]],
       tipo: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    
  }

  public registrar(){
    
    const url = 'http://192.168.137.210:3333/regUsuario';
    const header = new HttpHeaders().set('Content-type', 'application/json');
    this.json = JSON.stringify({
      username: this.formcrearusuario.value.username,
       password: this.formcrearusuario.value.password,
      email:this.formcrearusuario.value.email,
      tipo:this.formcrearusuario.value.tipo});

      return this.servicio.postData(url,this.json,header).subscribe(res=>{
        console.log(res);
      this.formcrearusuario.reset();
      })
    }

    
}
