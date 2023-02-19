// Primero se crea el enlace y sus propiedades

const enlace = document.createElement('A'); //Crear un nuevo enlace

enlace.textContent = 'Nuevo enlace'; //Agrega texto
enlace.href = '/nuevo-enlace'; //Agrega href
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('new-class');
enlace.onclick = myFunction;

//Se añade al DOM
const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace); // Agrega al final
// console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[2]); // Add on position

// console.log(enlace);

function myFunction() {
    alert('Diste clic');
}

// Create a dinamic card

//Create content 
const p1 = document.createElement('P');
p1.textContent = 'Concierto';
p1.classList.add('categoria', 'concierto');

const p2 = document.createElement('P');
p2.textContent = 'Rock 80s';
p2.classList.add('titulo');

const p3 = document.createElement('P');
p3.textContent = '$990 por persona';
p3.classList.add('precio');

// console.log(p1);
// console.log(p2);
// console.log(p3);

//Create div with info class
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(p1);
info.appendChild(p2);
info.appendChild(p3);

// Create img
const img = document.createElement('img');
img.src = 'img/hacer2.jpg';

// Create card div
const card = document.createElement('div');
card.classList.add('card');

// Asignar img e info
card.appendChild(img);
card.appendChild(info);

// console.log(card);

// Insert inside HTML
const cardContainer = document.querySelector('.contenedor-cards');
cardContainer.insertBefore(card, cardContainer.firstChild);
