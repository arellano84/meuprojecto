import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { BotonesModule } from '../botones/botones.module';
import { LineaComponent } from './linea/linea.component';

@NgModule({
  declarations: [MenuComponent, LineaComponent],
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
