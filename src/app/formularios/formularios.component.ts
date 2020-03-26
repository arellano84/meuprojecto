import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent{

  guardar(usuarioForm: NgForm) {
    console.log('Salvando...');
    console.log(usuarioForm);
    console.log(usuarioForm.value.nombre);// acceder al valor del campo nombre
  }

}
