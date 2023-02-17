const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Encontrar indice de un elemento

// meses.forEach ( (mes, i) => {
//     if ( mes === 'Abril'){
//         console.log(`Encontrado en el indice ${i}`);
//     }
// });

// // findIndex
// const indice = meses.findIndex( mes => mes === 'Abril');
// console.log(indice);

const cartIndex = carrito.findIndex( product => product.nombre === 'Audifonos');
console.log(cartIndex);
