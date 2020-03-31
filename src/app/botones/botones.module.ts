import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonGrandeComponent } from './boton-grande/boton-grande.component';

@NgModule({
  declarations: [BotonGrandeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BotonGrandeComponent
  ]
})
export class BotonesModule { }
