// Importar variables, funciones y clases
import nuevaFuncion, { nombreCliente, ahorro, mostrarInfo, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

console.log( nombreCliente );
console.log( ahorro );

console.log(mostrarInfo(nombreCliente,ahorro));
tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInfo());

const empresa = new Empresa('React', 129, 'Curso en linea');
console.log(empresa.mostrarInfo());

nuevaFuncion();