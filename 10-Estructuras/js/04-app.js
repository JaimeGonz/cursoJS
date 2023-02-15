// Operador mayor y menor que

const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;

if ( dinero >= totalAPagar) {
    console.log('Si podemos pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar porque tengo tarjeta');
} else {
    console.log('Fondos insuficientes');
}
