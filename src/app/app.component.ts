import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Luis Aros.';

  public alterarNome(evento: any){
    console.log(evento);
    this.nombre=evento.target.value;
  }
  public adicionar(){
    console.log(`Agregando ${this.nombre}`);
    const numero = Math.round(Math.random()*100);
    this.nombre = this.nombre + numero;
  }
}
