// Weak Set

const weakSet = new WeakSet(); // Solo le puedes pasar objetos, no aceptan strings o numeros

const cliente = {
    nombre: 'Jaime',
    saldo: 100
}

weakSet.add(cliente);
// console.log(weakSet.has(cliente));
// console.log(weakSet.delete(cliente));

console.log(weakSet);
