const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (evento) => {
    // console.log(evento.type);
    if (evento.target.value === '') {
        console.log('Fallo la validacion');
    }
    // console.log(evento.target.value); // Muestra lo que el usuario esta escribiendo

});

// keydown => Al precionar una tecla
// keyup => Al soltar una tecla
// blur => Al entrar al input y despues salir
// copy
// paste
// cut
// input => Todos los anteriores menos el blur
