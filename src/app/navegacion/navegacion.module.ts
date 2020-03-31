import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BotonesModule } from '../botones/botones.module';

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    BotonesModule
  ],
  exports: [
    MenuComponent,
    BotonesModule
  ]
})
export class NavegacionModule { }
