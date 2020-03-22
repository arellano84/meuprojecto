import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { TrabajadorCardComponent } from './trabajador-card/trabajador-card.component';
import { TrabajadorFormComponent } from './trabajador-form/trabajador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    TrabajadorCardComponent,
    TrabajadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
