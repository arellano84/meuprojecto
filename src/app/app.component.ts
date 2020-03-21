import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Luis Aros.';

  public adicionar(nombre: string){
    console.log(nombre);
    
    this.nombre = nombre;

    console.log(`Agregando ${this.nombre}`);
  }
}
