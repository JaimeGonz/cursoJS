const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('mouseout', () => {
    console.log("Click en Nav");
    nav.style.backgroundColor = 'blue';
});

// mouseenter: Al poner el cursor en el elemento
// mouseout: Al sacar el cursor del elemento
// mousedown: Cuando presionas el click
// mouseup: Cuando sueltas el click
// dblclick: Doble click
