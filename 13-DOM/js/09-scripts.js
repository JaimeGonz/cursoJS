// const primerEnlace = document.querySelector('a');
// primerEnlace.remove(); //Eliminar elemento
// console.log(primerEnlace);

// Eliminar desde el padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.removeChild(navegacion.children[2]);
