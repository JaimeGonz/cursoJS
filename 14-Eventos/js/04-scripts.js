const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario); // No se requiere agregar el evento, EventListener lo hace solo

function validarFormulario(e) { // Se manda el evento a la function
    e.preventDefault(); // Evita que se envien los datos del formulario
    // console.log(e.target.method);
    // console.log(e.target.action);
    console.log('Consultar una API');
    console.log(e.target.action);
}
