const puntaje = 1001;
const puntaje2 = "1000";

console.log(typeof puntaje);
console.log(typeof puntaje2);

// if (puntaje != 1000) { // != diferente == igual a
//     console.log('Si es diferente');
// } 

if (puntaje === '1000') { // != diferente == igual a
    console.log('Si es diferente');
} else {
    console.log('No es igual');
}

// == Operador no estricto
// === Operador estricto