const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click', obtenerDatos);

// document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json() )
        .then(resultado => mostrarHTML(resultado) )
}

function mostrarHTML( empleados ) {

    let html = '';

    empleados.forEach( empleado => {
        const { id, nombre, empresa, trabajo } = empleado;
        html += `
            <p> ID: ${id}</p>
            <p> Empleado: ${nombre}</p>
            <p> Empresa: ${empresa}</p>
            <p> Trabajo: ${trabajo}</p>
        `;
    })

    contenido.innerHTML = html;
}