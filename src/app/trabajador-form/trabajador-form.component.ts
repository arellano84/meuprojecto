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
  @Output() trabajadorAgregado = new EventEmitter();//Evento

  public agregar(){
    console.log(`Agregando ${this.nombre}`);
    this.agregado = true;
    console.log(this.agregado);

    /*this.trabajadores.push({
        id: ++this.ultimoId,
        nombre: this.nombre
    });*/
    const trabajador = {
      id: ++this.ultimoId,
      nombre: this.nombre
    }

    this.trabajadorAgregado.emit(trabajador);//Enviar el valor de la variable.

  }

}
