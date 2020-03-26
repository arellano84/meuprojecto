import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  nome = 'Luis Aros';
  dataAniversario = new Date(1990, 3, 19);
  preco = 12855.32;
  troco = 0.57392;

}
