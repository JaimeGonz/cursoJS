const carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco 1');
carrito.add('Disco 1'); // No se aceptan duplicados, las mayusculas importan
carrito.add('Disco 2');
carrito.add('Disco 3');

// Methods
carrito.delete('Disco 2'); // True si existe y lo borra
console.log(carrito.has('Camisa')); // True o false
console.log(carrito.size); // 4

carrito.forEach( producto => {
    console.log(producto);
});

carrito.clear(); //Elimina todo el set
console.log(carrito);

// Eliminar duplicados del siguiente arreglo
const numeros = [10,20,30,40,50,10,20];
const noDuplicados = new Set(numeros);
console.log(noDuplicados);
