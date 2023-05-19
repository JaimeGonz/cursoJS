// Generador => Funcion que retorna un iterador

// El * indica que es un generador
function *crearGenerador() {
    // Yield => Valores que se pueden iterar; forma static
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;

}

// Acceder a valores del Generador
// const iterador = crearGenerador();
// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador);

// Generador para carrito de compras
function *generadorCarrito() {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iterador = generadorCarrito(carrito);

console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
console.log( iterador.next() );
