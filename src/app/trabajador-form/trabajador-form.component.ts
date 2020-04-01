import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrabajadorService } from './../funcionario.service';

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




  // trabajadorService: TrabajadorService; Cambiamos a injection como parametro en constructor.
  constructor(private trabajadorService: TrabajadorService) {
    // this.trabajadorService = new TrabajadorService(); Cambiamos a injection como parametro en constructor.
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
