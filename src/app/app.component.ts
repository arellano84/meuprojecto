import { TrabajadorService } from './funcionario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  trabajadores = [];
  trabajadorService: TrabajadorService;

  constructor() {
    this.trabajadorService = new TrabajadorService();
  }
  ngOnInit() {
    this.trabajadores = this.trabajadorService.consultar();
    console.log(JSON.stringify(this.trabajadores));
  }

  alAgregar(trabajador) {
    this.trabajadores.push(trabajador);
  }

}
