import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trabajador-card',
  templateUrl: './trabajador-card.component.html',
  styleUrls: ['./trabajador-card.component.css']
})
export class TrabajadorCardComponent{

  @Input('inputTrabajador') trabajador: any;

}
