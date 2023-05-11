// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    // Al agregar un curso presionando el boton "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Muestra los cursos del LocalStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    });

    // Vaciar todo el carrito
    btnVaciarCarrito.addEventListener('click', () => {
        articulosCarrito = []; // Resetear el arreglo
        limpiarHTML(); // Eliminamos todo el HTML
    });
}

// Funciones
function agregarCurso (e) {
    e.preventDefault();
    if ( e.target.classList.contains('agregar-carrito') ) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminarCurso (e) {
    if ( e.target.classList.contains('borrar-curso') ) {
        const cursoId = e.target.getAttribute('data-id');

        // Eliminar del arreglo articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => {
            if ( curso.id === cursoId ) {
                if ( curso.cantidad > 1 ) { // Evalua cuando la cantidad de un articulo es mayor a 1
                    curso.cantidad--;
                    return curso;
                } else {
                    delete curso;
                }
            } else {
                return curso;
            }
        });
        
        carritoHTML();
    }
}

// Lee el contenido del HTML al que le dimos click y extreae la informacion del curso
function leerDatosCurso ( curso ) {

    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map( curso => {
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // Retorna el objeto actualizado
            } else {
                return curso; // Retorna objetos que no son duplicados
            }
        });
        articulosCarrito = [...cursos];
    } else {
        //Agrega elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoCurso ];
    }

    carritoHTML();
}

//Mostar elementos en el contenedor HTML
function carritoHTML() {
    // Limpiar HTML
    limpiarHTML();

    // Recorre carrito y genera HTML
    articulosCarrito.forEach( curso => {

        // Alternativa codigo reducido
        const { imagen, nombre, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100">
            </td>
            <td> ${nombre} </td>
            <td> ${precio} </td>
            <td> ${cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>          
        `;

        // Agrega HTML del carrito en el body
        contenedorCarrito.appendChild(row);

        // Agregar carrito de compras a LocalStorage
        sincronizarStorage();

    });
}

//Eliminar cursos del contenedor del carrito
function limpiarHTML() {

    // Va eliminando de uno por uno si hay hijos, mejor performance
    while ( contenedorCarrito.firstChild ) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
