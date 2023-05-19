// De esta forma funcionan el foreach, map, etc

function crearIterador(){
    let i = 0;

    return {
        siguiente: () => {
            const fin = ( i >= carrito.length );
            // Si no hemos llegado al fin, obtener valor actual; 
            const valor = !fin ? carrito[i++] : undefined ;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
