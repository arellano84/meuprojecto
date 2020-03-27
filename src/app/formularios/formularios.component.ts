import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nombre: string;
  email: string;
  profesion: string;
}


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  profesiones = [
    'Programador',
    'Empresario',
    'Otra'
  ];

  profesionDefalt = 'Programador';

  cliente: Cliente = new Cliente();

  guardar(usuarioForm: NgForm) {
    console.log('Salvando...');
    console.log(usuarioForm);
    console.log(usuarioForm.value.nombre); // acceder al valor del campo nombr
    console.log(usuarioForm.value.profesion);

/*  Se puede hacer tb con un binding en el campo-> [(ngModel)]
    this.cliente.nombre = usuarioForm.value.nombre;
    this.cliente.email = usuarioForm.value.email;
    this.cliente.profesion = usuarioForm.value.profesion;
*/
    console.log(usuarioForm.value);
    console.log(this.cliente);

    // this.cliente = new Cliente();

    usuarioForm.reset(); // Reset todo
    usuarioForm.reset({profesion: 'Seleccione'}); // Reset inicializando campos.
  }

}
