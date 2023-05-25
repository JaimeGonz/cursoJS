// Callback

const paises = ['Francia', 'Espana', 'Portugal', 'Australia', 'Inglaterra'];

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais);
        });
    }, 1000);
}

mostrarPaises();

const nuevoPais = (pais, callback) => {
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

nuevoPais('Alemania', mostrarPaises);
