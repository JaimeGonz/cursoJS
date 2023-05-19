// Listas de llave, valor => mejor performance que un objeto
const cliente = new Map();
cliente.set('nombre', 'karen');
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre')); //Solo para las keys

console.log(cliente.get('nombre')); //Obtiene el valor de una key
cliente.delete('saldo');

cliente.clear();
console.log(cliente);


// Iniciar Map con valores
const paciente = new Map( [['nombre', 'paciente', ], ['cuarto', 'no definido'] ]);
paciente.set('Dr', 'Dr Asignado');
paciente.set('nombre', 'Antonio');
console.log(paciente);

paciente.forEach( (datos, key) => {
    console.log(key+" => "+datos);
});
