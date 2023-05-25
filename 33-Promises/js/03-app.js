// Promises
/* 3 valores de respuesta disponibles

1) fulfilled => El promise se cumplio
2) rejected => El promise no se cumplio
3) pending => Aun no se cumple y tampoco ha sido rechazado

*/

const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('Error al aplicar descuento');
    }
});

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => console.log(error));


const descuento = mensaje => {
    console.log(mensaje);
}

