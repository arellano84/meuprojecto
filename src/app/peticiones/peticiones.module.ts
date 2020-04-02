import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CiudadesFormComponent } from './ciudades-form/ciudades-form.component';
import { CiudadService } from './ciudad.service';

@NgModule({
  declarations: [CiudadesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    CiudadesFormComponent
  ],
  providers: [
    CiudadService
  ]
})
export class PeticionesModule { }
