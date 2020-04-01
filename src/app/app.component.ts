import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from './funcionario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  trabajadores = [];
  // trabajadorService: TrabajadorService; Cambiamos a injection como parametro en constructor.

  constructor(private trabajadorService: TrabajadorService) {
    // this.trabajadorService = new TrabajadorService(); Cambiamos a injection como parametro en constructor.
  }
  ngOnInit() {
    this.trabajadores = this.trabajadorService.consultar();
    console.log(JSON.stringify(this.trabajadores));
  }

  alAgregar(trabajador) {
    this.trabajadores.push(trabajador);
  }

}
