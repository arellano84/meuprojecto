import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NavegacionModule } from './navegacion/navegacion.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { TrabajadorCardComponent } from './trabajador-card/trabajador-card.component';
import { TrabajadorFormComponent } from './trabajador-form/trabajador-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FormulariosComponent } from './formularios/formularios.component';

import { TrabajadorService } from './funcionario.service';
import { LogService } from './log.service';

/*
15.5. Configurando o injetor com provider por fábrica
*/
/*const crearTrabajadorService = () => {
  return new TrabajadorExtService(2);
};*/


@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    TrabajadorCardComponent,
    TrabajadorFormComponent,
    CampoColoridoDirective,
    PipesComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // BotonesModule, Se puede exportas desde en NavegacionModule.
    NavegacionModule
  ],
  providers: [
    LogService,
    {provide: 'LogPrefijo', useValue: 'LOG'}, // se inyecta con @Inject
    TrabajadorService // Directamente sin utiliza la otra clase.
    // {provide: TrabajadorService, useClass: TrabajadorExtService}
    // {provide: TrabajadorService, useFactory: crearTrabajadorService} // Utiliza funcion que provee instancia.

  ], // Pasamos clase a injectar en constructor.
  bootstrap: [AppComponent]
})
export class AppModule { }
