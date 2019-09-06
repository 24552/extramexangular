import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SConexionService } from 'src/app/Services/sconexion.service';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-crear-partida',
  templateUrl: './crear-partida.component.html',
  styleUrls: ['./crear-partida.component.css']
})
export class CrearPartidaComponent implements OnInit {
  
    public formcrearpartida: FormGroup;
    public builder = new FormBuilder();
    public json= {};
  
  
  
    constructor(private servicio: SConexionService, private router:Router) {
      this.formcrearpartida = this.builder.group({
        nombre: ['', Validators.required],
        activa: ['', Validators.required]
       
      });
    }
  



  ngOnInit() {
    this.getmostrarpartidas()
  }

  public reg(){
    const url = 'http://192.168.137.210:3333/nuevaPartida';
    const header = new HttpHeaders().set('Content-type','application/json');
    this.json = JSON.stringify({
      nombre: this.formcrearpartida.value.nombre,
      activa: this.formcrearpartida.value.activa});

      return this.servicio.postData(url,this.json,header).subscribe(result=>{
        console.log(result);
      this.formcrearpartida.reset();
    })
    }
    public partidas = [];
      getmostrarpartidas() {
        this.servicio.getData('http://192.168.137.210:3333/partidas').subscribe( (r) => {
        this.partidas = JSON.parse(JSON.stringify(r))
        console.log(this.partidas)
      })
        }
      }
      
     
    