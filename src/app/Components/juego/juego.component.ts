import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MexicoService } from 'src/app/mexico.service';
import { SConexionService } from 'src/app/Services/sconexion.service';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit ,OnDestroy {
  ngOnDestroy(): void {
    this.mexmostrarpreguntas.traersubscripcion('mexicanos').close()
    
  }
  public url='http://192.168.137.210:3333'
  public pregunta;
  public respuesta;
  public puntaje;
  public t2;
  public tl;
  usuario;
  constructor(public servicio: SConexionService, public mexmostrarpreguntas:MexicoService, public mexmostrarespuestas:MexicoService, private route:Router)
  {
    
  }

  ngOnInit() {
    this.puntaje=0
    this.pregunta=''
    this.t2=true
    this.tl=true
    this.respuesta=''
   setTimeout(()=>{
    this.mexmostrarpreguntas.conectar()
    this.mexmostrarpreguntas.subscribircanal('mexicanos');
    this.mexmostrarpreguntas.traersubscripcion('mexicanos').on('obtenerpregunta',(data) => {
    this.servicio.getData('http://192.168.137.210:3333/traerpregunta/'+data).subscribe(respuesta=>{
     this.pregunta =JSON.parse(JSON.stringify(respuesta)).pregunta
     this.t2=false
     this.tl=true
    })
    })
    this.mexmostrarespuestas.traersubscripcion('mexicanos').on('obtenerpregunta',(data) => {
    this.servicio.getData('http://192.168.137.210:3333/traerespuestas/'+data).forEach(respuesta=>{
     this.respuesta =JSON.parse(JSON.stringify(respuesta))
     console.log(respuesta)
     this.tl=true
     
    })
    })
  this.mexmostrarespuestas.traersubscripcion('mexicanos').on('obtenerespuesta',()=>{
    this.t2=true
  })
      
      this.servicio.getData(this.url).subscribe((puntos: Array<Number>) =>{
        this.respuesta= puntos;
         console.log(puntos);
        });
        this.mexmostrarespuestas.traersubscripcion('mexicanos').on('enviartotal',()=>{
          this.mexmostrarespuestas.traersubscripcion('mexicanos').emit('datos',
           { usuario: localStorage.getItem('usuario'),
           puntos: this.puntaje
            }
          )
        })
        this.mexmostrarespuestas.traersubscripcion('mexicanos').on('ganador',(ganador)=>{
          let mensaje=JSON.parse(JSON.stringify(ganador)).ganador
          alert('partida finalisada ganador '+mensaje)
          this.route.navigate(['/jugador'])
          this.comenzar();

        })
        this.usuario=localStorage.getItem('usuario')

   },2000)
}

      public guardarpuntos(puntos){
    this.puntaje=this.puntaje+Number(puntos)
    this.tl=true
      
}
public enviar1(){
  this.mexmostrarpreguntas.traersubscripcion('mexicanos').emit('enviarespuesta')
  this.tl = false
}
public comenzar(){
  this.puntaje=0
    this.pregunta=''
    this.t2=true
    this.tl=true
    this.respuesta=''
} 
}