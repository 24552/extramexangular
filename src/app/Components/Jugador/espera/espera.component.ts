import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MexicoService } from 'src/app/mexico.service';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    this.websocket.traersubscripcion('mexicanos').close()
  }

  constructor(
    private route: Router,
    private websocket:MexicoService
  ) { }

  ngOnInit() {
    this.websocket.conectar()
    this.websocket.subscribircanal('mexicanos')
    this.websocket.traersubscripcion('mexicanos').on('jugar',()=>{
      this.route.navigate(['/juego'])
    })
  }

}
