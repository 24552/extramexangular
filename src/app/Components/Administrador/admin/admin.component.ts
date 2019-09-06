import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SConexionService } from 'src/app/Services/sconexion.service';
import { HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/Classes/user';
import { Router } from '@angular/router';
import { MexicoService } from 'src/app/mexico.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})


export class AdminComponent implements OnInit {
  public  form_nuevapregunta: FormGroup;

  public url='http://192.168.137.210'

  constructor(public servicio: SConexionService, public mexmostrarpreguntas:MexicoService) {
    this.form_nuevapregunta = new FormBuilder().group({
      pregunta: ['', Validators.required] ,
      respuesta1: ['', Validators.required],
      valor1: ['', Validators.required],
      respuesta2: ['', Validators.required],
      valor2: ['', Validators.required],
      respuesta3: ['', Validators.required],
      valor3: ['', Validators.required],
      respuesta4: ['', Validators.required],
      valor4: ['', Validators.required],
      respuesta5: ['', Validators.required],
      valor5: ['', Validators.required],
     })
   }



  ngOnInit() {
    this.mexmostrarpreguntas.conectar()
    this.mexmostrarpreguntas.subscribircanal('mexicanos');
    this.mexmostrarpreguntas.traersubscripcion('mexicanos').on('obtenerpregunta',(data) => {
      console.log('preguntaresivida: '+ data)
    })

    this.getmostrarpreguntas()
  }
  
  public agregarpreguntas(){
    let respuestas = [
      {respuesta: this.form_nuevapregunta.controls.respuesta1.value, puntos: this.form_nuevapregunta.controls.valor1.value},
      {respuesta: this.form_nuevapregunta.controls.respuesta2.value, puntos: this.form_nuevapregunta.controls.valor2.value},
      {respuesta: this.form_nuevapregunta.controls.respuesta3.value, puntos: this.form_nuevapregunta.controls.valor3.value},
      {respuesta: this.form_nuevapregunta.controls.respuesta4.value, puntos: this.form_nuevapregunta.controls.valor4.value},
      {respuesta: this.form_nuevapregunta.controls.respuesta5.value, puntos: this.form_nuevapregunta.controls.valor5.value}]
    const url = 'http://192.168.137.210:3333/nuevaspreguntas';
    const header = new HttpHeaders().set('Content-type', 'application/json');
    const json = JSON.stringify({pregunta: this.form_nuevapregunta.controls.pregunta.value, respuestas: respuestas});

       this.servicio.postData(url,json,header).subscribe(res=>{
        console.log(res);
      this.form_nuevapregunta.reset();
      })
    }
    public enviarpregunta(id){
    this.mexmostrarpreguntas.traersubscripcion('mexicanos').emit('enviarpregunta',id)
    }
  public preguntas = [];
    getmostrarpreguntas() {
      this.servicio.getData('http://192.168.137.210:3333/mostrarpreguntas').subscribe( (r) => {
      this.preguntas = JSON.parse(JSON.stringify(r))
      console.log(this.preguntas)
      });
    }
   
  }

