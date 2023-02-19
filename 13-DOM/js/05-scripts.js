// querySelectorAll

const card = document.querySelectorAll('.card');
console.log(card);

// No es buena practica tener mas de un elemento con el mismo id
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste);
