const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

const producto4 = {
    nombre: "iPhone",
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);
carrito.unshift(producto3);

console.table(carrito);

//Eliminar ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito);

//Eliminar del inicio del arreglo
// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);
