import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  constructor(private httpClient: HttpClient) { }

  consultar(): Promise<any> {
    console.log('-Servicio- Consultado Ciudades...');
    return this.httpClient
      .get('http://localhost:3000/ciudades')
      .toPromise();
  }

  agregrar(ciudad: any): Promise<any> {
    return this.httpClient
      .post('http://localhost:3000/ciudades', ciudad)
      .toPromise();
  }


}
