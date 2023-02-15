"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze( producto );

// No es posible agregar, editar o eliminar propiedades del objeto
// producto.disponible = false;
// producto.imagen = "imagen.jpg";
// delete producto.precio;

console.log(Object.isFrozen(producto));
console.log(producto);
