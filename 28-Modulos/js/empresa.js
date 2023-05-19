import { Cliente } from './cliente.js';

export class Empresa extends Cliente {
    constructor (nombre, ahorro, categoria) {
        super(nombre, ahorro);
        this.categoria = categoria;
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre} - Precio: ${this.ahorro} - Categoria: ${this.categoria}`;
    }
}
