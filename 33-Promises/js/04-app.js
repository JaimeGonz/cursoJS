const paises = [];

const nuevoPais = (pais) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            paises.push(pais);
            resolve(`Agregado: ${pais}`);
        }, 3000);
    });
}

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    }) // resultado: Resultado del resolve.
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Brasil');
    })
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
    });
