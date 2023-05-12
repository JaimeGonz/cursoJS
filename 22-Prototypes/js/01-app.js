// Prototypes

// Object literal syntax, no dynamic
const cliente = {
    nombre: 'Jaime',
    saldo: 500
}

console.log(cliente);

// Object constructor, more dynamic
// This example was OOP in JavaScript
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jaime = new Cliente('Jaime', 500);
console.log(jaime);
