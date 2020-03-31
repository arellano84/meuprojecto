import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boton-grande',
  templateUrl: './boton-grande.component.html',
  styleUrls: ['./boton-grande.component.css']
})
export class BotonGrandeComponent implements OnInit {

  @Input() labelBotonGrande: string;

  constructor() { }

  ngOnInit() {
  }

}
