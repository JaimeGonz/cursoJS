const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

// Consultar precio total - forEach
let total = 0;
carrito.forEach( product => total += product.precio);
console.log(total);

// Con un reduce
let result = carrito.reduce( (total, product) => total + product.precio, 0 );
console.log(result);
