const autenticado = false;
const puedePagar = true;

// console.log( autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado');
// console.log( autenticado || puedePagar ? 'Si esta autenticado' : 'No esta autenticado');

console.log( autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Esta autenticado, pero no puede pagar' : 'No puede pagar');
