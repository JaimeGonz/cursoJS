const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Filter
let resultado = carrito.filter( product => product.precio > 400 );
resultado = carrito.filter( product => product.precio < 600);
resultado = carrito.filter( product => product.nombre !== 'Audifonos' );    

console.log(resultado);
