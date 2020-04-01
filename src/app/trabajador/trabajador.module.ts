
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { FormulariosComponent } from './../formularios/formularios.component';
import { PipesComponent } from './../pipes/pipes.component';
import { CampoColoridoDirective } from './../campo-colorido.directive';

import { TrabajadorFormComponent } from './trabajador-form/trabajador-form.component';
import { TrabajadorCardComponent } from './trabajador-card/trabajador-card.component';

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
  ]
})
export class TrabajadorModule { }
