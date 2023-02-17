const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Comprobar si un valor existe en el arreglo
// meses.forEach( mes => {
//     if (mes === 'Enero') {
//         console.log('Enero si esta en el arreglo');
//     }
// });

// Works with simple arrays
// const resultado = meses.includes('Enero');
// console.log(resultado);

// For an object array use some
const existe = carrito.some( product => product.nombre === 'Celular');
console.log(existe);

// Arreglo tradicional can use some
const result = meses.some( mes => mes === 'Mayo');
console.log(result);

