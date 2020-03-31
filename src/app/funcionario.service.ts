export class TrabajadorService {

  trabajadores = [{id: 1, nombre: 'Luis'}];
  ultimoId = 1;

  agregar(nombre) {
    const trabajador = {
      id: ++this.ultimoId,
      nombre: nombre
    };
    this.trabajadores.push(trabajador);

    console.log(JSON.stringify(this.trabajadores));
  }

  consultar() {
    return this.trabajadores;
  }
}
