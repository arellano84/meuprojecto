import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Iniciando mi proyecto';
  nombre = 'Luis Aros.';
  edad = 35;

  public getEdad(){
    return this.edad;
  }

}
