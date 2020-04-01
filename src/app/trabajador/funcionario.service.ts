import { Injectable } from '@angular/core';

import { LogService } from './../log.service';

@Injectable() // 15.7. Injetando serviços dentro de serviços e o decorador @Injectable
export class TrabajadorService {

  trabajadores = [{id: 1, nombre: 'Luis'}];
  ultimoId = 1;

  constructor(private logService: LogService) {

  }

  agregar(nombre: string) {
    const trabajador = {
      id: ++this.ultimoId,
      nombre: nombre
    };
    this.trabajadores.push(trabajador);

    this.logService.log(JSON.stringify(this.trabajadores));
  }

  consultar() {
    return this.trabajadores;
  }
}

/*
15.4. Configurando o injetor com provider por classe
*/
/*export class TrabajadorExtService extends TrabajadorService {

  constructor(private numeroCaracteres: number) {
    super();
  }

  agregar(nombre: string) {
    super.agregar(nombre.substr(0, this.numeroCaracteres) + '...');
  }
}
*/
