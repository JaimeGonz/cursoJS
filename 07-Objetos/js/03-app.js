const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//Add more properties to object
producto.imagen = "imagen.jpg";

//Delete properties
delete producto.disponible;

console.log(producto);
