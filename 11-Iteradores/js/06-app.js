// for Each

// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// pendientes.forEach( (pendiente, index) => {
//     console.log(`${index}: ${pendiente}`);
// });

const carrito = [
    { nombre: 'Monitor 27 pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

carrito.forEach( (producto, i) => {
    console.log(`Carrito ${i}: ${producto.nombre} - $${producto.precio}`);
});

// carrito.forEach( producto => console.log(producto.nombre));
carrito.map( producto => console.log(producto.nombre));

// forEach vs Map, el segundo crea un nuevo arreglo

const nuevoArreglo = carrito.forEach( producto => producto.nombre);
const nuevoArreglo2 = carrito.map( producto => producto.nombre);
console.log(nuevoArreglo);
console.log(nuevoArreglo2);
