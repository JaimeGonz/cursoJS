const sym = Symbol('1');
const sym2 = Symbol('1');

if(sym === sym2){
    console.log('Son iguales');
} else {
    console.log('Son diferentes');
}

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

// Agrega nombre y apellido como llaves del objeto
persona[nombre] = 'Juan';
persona[apellido] = 'Flores';


console.log(persona);
// console.log(persona[nombre]); // Para acceder al valor de un symbol

// Las propiedades que se utilicen como symbol no son iterables
for (let i in persona) {
    console.log(i);
}

// Definir una descripcion del symbol 
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);
