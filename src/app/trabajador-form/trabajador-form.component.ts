import { TrabajadorService } from './../funcionario.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-trabajador-form',
  templateUrl: './trabajador-form.component.html',
  styleUrls: ['./trabajador-form.component.css']
})
export class TrabajadorFormComponent {

  ultimoId = 0;
  nombre = 'Luis Aros';
  agregado = false;
  // Evento
  @Output('outputTrabajadorAgregado') trabajadorAgregado = new EventEmitter();

  trabajadorService: TrabajadorService;
  constructor() {
    this.trabajadorService = new TrabajadorService();
  }
  public agregarConServicio(nombre: string) {
    console.log(nombre);
    this.trabajadorService.agregar(nombre);
  }

  public agregar() {

    console.log(`Agregando ${this.nombre}`);
    this.agregado = true;
    console.log(this.agregado);

    const trabajador = {
      id: ++this.ultimoId,
      nombre: this.nombre
    };

    // Enviar el valor de la variable.
    this.trabajadorAgregado.emit(trabajador);
  }

}
