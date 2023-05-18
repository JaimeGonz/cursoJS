// Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');
// UI
const form = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas {
    constructor() {
        this.citas = [];
    }

    agregarCita(cita) {
        this.citas = [...this.citas, cita];
        // console.log(this.citas);
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaEditar) {
        // Busca que el id sea igual, cuando lo encuentra cambia la cita por citaEditar(la que se pusieron nuevos cambios)
        this.citas = this.citas.map( cita => cita.id === citaEditar.id ? citaEditar : cita);
    }

}

class UI {

    mostrarAlerta(mensaje, tipo) {
        // Crear un div
        const divMensaje = document.createElement('div');
        divMensaje.className = 'text-center alert d-block col-12';

        // Si es error
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
            divMensaje.classList.remove('alert-danger');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarCitas({ citas }) {
        // const {citas} = citas;

        this.limpiarHTML();
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita
            const mascotaP = document.createElement('h2');
            mascotaP.className = 'card-title font-weight-bolder';
            mascotaP.textContent = mascota;

            const propietarioP = document.createElement('p');
            propietarioP.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario} 
            `;

            const telefonoP = document.createElement('p');
            telefonoP.innerHTML = `
                <span class="font-weight-bolder">Telefono: </span> ${telefono} 
            `;

            const fechaP = document.createElement('p');
            fechaP.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha} 
            `;

            const horaP = document.createElement('p');
            horaP.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora} 
            `;

            const sintomasP = document.createElement('p');
            sintomasP.innerHTML = `
                <span class="font-weight-bolder">Sintomas: </span> ${sintomas} 
            `;

            // Boton para eliminar cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `
                Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            `;

            btnEliminar.onclick = () => eliminarCita(id);

            // Boton para editar citas
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `
                Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
            `;
            btnEditar.onclick = () => cargarEdicion(cita);


            // Agregar los parrafos al div cita
            divCita.appendChild(mascotaP);
            divCita.appendChild(propietarioP);
            divCita.appendChild(telefonoP);
            divCita.appendChild(fechaP);
            divCita.appendChild(horaP);
            divCita.appendChild(sintomasP);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // Agregar las citas al HTML
            contenedorCitas.appendChild(divCita);

        });
    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

const ui = new UI();
const administrarCita = new Citas();

// Registar eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);

    form.addEventListener('submit', nuevaCita);

}

// Objeto con la informacion de la cita
const citaObj = {
    // Para que funcione tiene en el HTML tiene que tener un name con el mismo nombre del objeto
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos al objeto de cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

// Valida y agrega nueva cita a clase de Citas
function nuevaCita(e) {
    e.preventDefault();

    // Extraer informacion del objeto de citas
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if (mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if (editando) {
        ui.mostrarAlerta("Cita editada correctamente!");

        // Pasar el objeto de la cita
        administrarCita.editarCita({...citaObj});

        // Regresar boton al texto original
        form.querySelector('button[type="submit"]').textContent = 'CREAR CITA';


    } else {
        // Generar un id
        citaObj.id = Date.now();

        // Crea una nueva cita
        administrarCita.agregarCita({ ...citaObj }); // Pasa una copia del objeto, no toda la referencia
        
        // Mensaje de agregado correctamente
        ui.mostrarAlerta("Cita agregada con exito!");
        // Quitar modo edicion
        editando = false;
    }

    // Reiniciar el objeto para la validacion
    reiniciarObjeto();

    // Reinicia el formulario
    form.reset();

    // Mostrar HTML de las citas
    ui.mostrarCitas(administrarCita);
}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id) {
    // Eliminar cita
    administrarCita.eliminarCita(id);

    // Mostrar mensaje
    ui.mostrarAlerta('La cita se elimino correctamente');

    // Refrescar citas
    ui.mostrarCitas(administrarCita);
}

// Carga los datos y el modo edicion
function cargarEdicion(cita){
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    // Llenar inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del boton a Guardar cambios
    form.querySelector('button[type="submit"]').textContent = 'Guardar cambios';

    editando = true;

}
