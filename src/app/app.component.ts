import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Luis Aros';
  agregado = false;

  public adicionar(){
    console.log(`Agregando ${this.nombre}`);
    this.agregado = true;
    console.log(this.agregado);
  }
}
