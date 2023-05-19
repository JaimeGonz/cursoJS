// (function() {
//     console.log('Desde un IIFE');
//     window.nombreCliente = 'Jaime';
// })();

// Exportar variables
export const nombreCliente = 'Jaime';
export const ahorro = 200;


// Exportar funcines
export function mostrarInfo(nombreCliente, ahorro){
    return `Cliente: ${nombreCliente} - Ahorro: ${ahorro}`;
}

export const tieneSaldo = ahorro => {
    if(ahorro > 0){
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

// Exportar clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInfo() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Este es el export default');
}
