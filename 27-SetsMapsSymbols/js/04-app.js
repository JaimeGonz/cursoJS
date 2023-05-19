// Weak Map
const producto = {
    idProducto : 10
}

const weakMap = new WeakMap();
weakMap.set(producto, 'Monitor');

console.log(weakMap.has(producto)); // Si existe
console.log(weakMap.get(producto)); // Obtiene el valor
console.log(weakMap.delete(producto)); // Elimina

console.log(weakMap);

// No se pueden iterar

