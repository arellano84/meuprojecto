import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId = 0;
  nombre = 'Luis Aros';
  agregado = false;
  trabajadores = [];

  public agregar(){
    console.log(`Agregando ${this.nombre}`);
    this.agregado = true;
    console.log(this.agregado);

    this.trabajadores.push({
        id: ++this.ultimoId,
        nombre: this.nombre
    });

  }
}
