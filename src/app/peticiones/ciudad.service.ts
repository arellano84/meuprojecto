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

  eliminar(id: number): Promise<any> {
    return this.httpClient.delete(`http://localhost:3000/ciudades/${id}`)
    .toPromise()
    .then(() => null);
  }

  actualizar(ciudad: any): Promise<any> {
    return this.httpClient.put(`http://localhost:3000/ciudades/${ciudad.id}`, ciudad)
    .toPromise();
    // .then(response => response.json());
  }

}
