document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos de la interfaz
    const email = {
        email: '',
        cc:'',
        asunto: '',
        mensaje: ''
    }
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const textMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnEnviar = document.querySelector('#botones button[type="submit"]');
    const btnReset = document.querySelector('#botones button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    const inputCC = document.querySelector('#cc');

    // Asignar eventos

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    textMensaje.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validarCC);
    // inputEmail.addEventListener('input', validar);
    // inputAsunto.addEventListener('input', validar);
    // textMensaje.addEventListener('input', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', e => {
        e.preventDefault();
        // Reiniciar el objeto email
        const datosFormulario = e.target.parentElement.parentElement.children;

        for ( let [key, value] of Object.entries(datosFormulario)){
            limpiarAlerta(value);
        }

        resetFormulario();

    });

    function enviarEmail(e) {
        e.preventDefault();

        console.log('Enviando...');
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(() => {
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');
            resetFormulario();

            // Crear alerta para el usuario
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';
            formulario.appendChild(alertaExito);

            setTimeout(() => {
                alertaExito.remove();
            }, 3000);

        }, 3000);
    }

    function validar(e) {
        if( e.target.value.trim() === '' ) {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        } 

        if ( e.target.id ==='email' && !validarEmail(e.target.value) ) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        //Asignar valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto del email
        comprobarEmail();
    }

    function validarCC (e) {
        email[e.target.name] == e.target.value.trim().toLowerCase();

        if ( e.target.value.trim() ==='' && e.target.id !== 'cc' ) {
            mostrarAlerta('El email no es valido', e.target.parentElement);
            email[e.target.cc] = '';
            comprobarEmail();
            return;
        }

        //Asignar valores
        email[e.target.cc] = e.target.value.trim().toLowerCase();
        
        //Comprobar el objeto del email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        //Comprueba si ya existe una alerta
        limpiarAlerta(referencia);

        // Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        // Insertar el elemento al formulario
        referencia.appendChild(error);

    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if (Object.values(email).includes('') && Object.values(email.cc)) {
            btnEnviar.classList.add('opacity-50');
            btnEnviar.disabled = true;
            return;
        } 
        btnEnviar.classList.remove('opacity-50');
        btnEnviar.disabled = false;
    }

    function resetFormulario () {
        email.email = '';
        email.asunto = '';
        email.mensaje = '';

        formulario.reset();
        comprobarEmail();
    }

});
