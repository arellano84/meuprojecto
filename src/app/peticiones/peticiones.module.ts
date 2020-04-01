import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiudadesFormComponent } from './ciudades-form/ciudades-form.component';

@NgModule({
  declarations: [CiudadesFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CiudadesFormComponent
  ]
})
export class PeticionesModule { }
