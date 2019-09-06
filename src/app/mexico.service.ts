import { Injectable } from '@angular/core';
import Ws from '@adonisjs/websocket-client'
const ws = Ws('ws://192.168.137.210:3333')
@Injectable({
  providedIn: 'root'
})
export class MexicoService {

socket;
  constructor() { }
  conectar(){
    ws.connect()
  }
  subscribircanal(topic){
    let socket = ws.subscribe(topic)
  }
  traersubscripcion(topic){
    return this.socket = ws.getSubscription(topic)
  }
}
