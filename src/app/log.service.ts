import { Inject, Injectable } from '@angular/core';

/*
15.6. Configurando o injetor com provider por valor e o decorator @Inject
*/
@Injectable()
export class LogService {

  constructor(@Inject('LogPrefijo') private profijo: string) {
  }

  log(msg: string) {
    console.log(`${this.profijo}: ${msg}`);
  }
}
