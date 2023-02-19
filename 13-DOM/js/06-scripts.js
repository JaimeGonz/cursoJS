// Modificar elementos

const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerHTML); //Trae el HTML code
// console.log(encabezado.innerText); // Si en CSS; visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent); // Si lo encuentra

const nuevoHeading = 'Nuevo heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

// Firefox developer edition permite ver todas las propiedes de cada elemento

// const title = 'Real Madrid match' 
// document.querySelector('.card:nth-child(3) .info .titulo').textContent = title;
// console.log(title);

// const imagen = document.querySelector('.card img');
// imagen.src = 'img/hacer2.jpg';
