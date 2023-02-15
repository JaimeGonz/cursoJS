const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito.forEach( function(producto){
    console.log(`${producto.nombre} - ${producto.precio}`);
} )

//Puedes crear nuevos arreglos con propiedades seleccionadas
const nuevoArreglo = carrito.map( function(producto){
    return `${producto.nombre} - ${producto.precio}`;
} )

console.log(nuevoArreglo);
