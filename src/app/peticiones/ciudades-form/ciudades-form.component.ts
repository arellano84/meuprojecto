import { Component, OnInit } from '@angular/core';
import { CiudadService } from './../ciudad.service';

@Component({
  selector: 'app-ciudades-form',
  templateUrl: './ciudades-form.component.html',
  styleUrls: ['./ciudades-form.component.css']
})
export class CiudadesFormComponent implements OnInit {

  ciudades = [
    // { id: 1, nome: 'Uberlândia' }
  ];

  constructor(private ciudadService: CiudadService) {}

  ngOnInit() {
    console.log('-Component- Consultado Ciudades...');
    this.ciudadService.consultar()
    .then(ciudades => {
        this.ciudades = ciudades;
        console.log(this.ciudades);
        console.log(this.ciudades[0].nombre);
    });
  }

  adicionar(nome: string) {
    alert(nome);
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(ciudad: any) {
    alert(JSON.stringify(ciudad));
  }

}
