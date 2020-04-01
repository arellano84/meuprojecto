import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampoColoridoDirective } from './../campo-colorido.directive';

import { TrabajadorFormComponent } from './trabajador-form/trabajador-form.component';
import { TrabajadorCardComponent } from './trabajador-card/trabajador-card.component';

import { TrabajadorService } from './funcionario.service';

@NgModule({
  declarations: [
    TrabajadorCardComponent,
    TrabajadorFormComponent,
    CampoColoridoDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TrabajadorCardComponent,
    TrabajadorFormComponent
  ],
  providers: [
    TrabajadorService // Directamente sin utiliza la otra clase.
    // {provide: TrabajadorService, useClass: TrabajadorExtService}
    // {provide: TrabajadorService, useFactory: crearTrabajadorService} // Utiliza funcion que provee instancia.

  ], //
})
export class TrabajadorModule { }
