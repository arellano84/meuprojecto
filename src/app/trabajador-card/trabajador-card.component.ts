import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trabajador-card',
  templateUrl: './trabajador-card.component.html',
  //styleUrls: ['./trabajador-card.component.css']
  styles: [`
    .card-body {
      text-transform: uppercase;
      color: blue;
    }
  `]
})
export class TrabajadorCardComponent{

  @Input('inputTrabajador') trabajador: any;

  getEstilosTarjeta() {
    return {
      //'background-color': 'red'
      backgroundColor: this.trabajador.id % 2 == 0 ? 'blue' : 'lightgreen',
      //'border-width': this.trabajador.id + 'px'
      'border-width.px': this.trabajador.id
    };
  }

  /*getClasesCss() {
    return ['badge', 'badge-default'];
  }*/

  isAdmin() {
    return this.trabajador.nombre.startsWith('T');
  }

}
