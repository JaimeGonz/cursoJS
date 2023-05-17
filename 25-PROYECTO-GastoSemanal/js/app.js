// Variables and Selectors
const form = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Events
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    form.addEventListener('submit', agregarGasto);
}

// Classes

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) { 
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter( gasto => gasto.id != id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extraer valores
        const { presupuesto, restante } = cantidad;
        // Asignarlos al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {
        // Crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.primario').insertBefore( divMensaje, form);
        // Quitar alerta HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostarGastos(gastos) {

        this.limpiarHTML(); // Elimina HTML previo
        
        // Iterar sobre los gastos
        gastos.forEach( lista => {
            const { cantidad, gasto, id } = lista;
            
            // Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            // nuevoGasto.setAttribute('data-id',id);
            nuevoGasto.dataset.id = id; // Es lo mismo que la linea de arriba

            // Agregar HTML del gasto
            nuevoGasto.innerHTML = `
                ${gasto} <span class="badge badge-primary badge-pill">$${cantidad} </span>
            `;

            // Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');
            // btnBorrar.textContent = 'Borrar &times;'; //No funciona la X
            btnBorrar.innerHTML = 'Borrar &times;';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }

            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);

        });
    }
    
    limpiarHTML() {
        while( gastoListado.firstChild ) {
            gastoListado.removeChild(gastoListado.firstChild);
        };
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25%
        if (( presupuesto / 4 ) > restante) {
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if (( presupuesto / 2 ) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }
        
        // Si el total es <= 0
        if (restante <= 0) {
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            form.querySelector('button[type="submit"]').disabled = true;
        }
    }

}
// Instanciar
const ui = new UI();
let presupuesto;

// Functions

function preguntarPresupuesto() {
    const presupuestoUsuario = prompt('Escribe tu presupuesto:');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }   

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
}

// Agrega gastos
function agregarGasto(e) {
    e.preventDefault();

    // Leer datos del formulario
    const gasto = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (gasto === '' && cantidad === '' || gasto === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    } 
    
    
    // Generar objeto con el gasto
    const gastosObj = { gasto, cantidad, id: Date.now() }; 
    
    // Agrega un nuevo gasto 
    presupuesto.nuevoGasto(gastosObj);

    // Mostar alerta
    ui.imprimirAlerta('Gasto agregado correctamente!');

    // Imprimir los gastos
    const { gastos, restante } = presupuesto;
    ui.mostarGastos(gastos);

    // Actualizar cantidad restante
    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
    
    // Reiniciar valores del formulario
    form.reset();

}

function eliminarGasto(id) {
    // Elimina gastos del objeto Presupuesto
    presupuesto.eliminarGasto(id);

    // Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostarGastos(gastos);// Actualizar cantidad restante
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}
