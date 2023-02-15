const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

// const puntaje = 500;
// if ( puntaje > 400 ) {
//     console.log('Felicidades');
// } else if (puntaje > 300) {
//     console.log('Buen puntaje... felicidades');
// } 

const puntaje = 450;

function revisarPuntaje() {
    if ( puntaje > 400 ) {
        console.log('Felicidades');
        return;
    }
    
    if (puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    } 
}

revisarPuntaje();
