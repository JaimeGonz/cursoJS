// For... in -  Itera sobre objetos
const auto = {
    model: 'Camaro',
    year: '1969',
    motor: '6.0'
}

// for ( let propiedad in auto ) {
//     console.log(`${auto[propiedad]}`);
// }

//More efficient version to use with Objects
for ( let [ key, value] of Object.entries(auto) ) {
    console.log(key);
    console.log(value);
}
