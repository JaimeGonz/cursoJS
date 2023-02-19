const btn = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Agregar funcion anonima
// btn.addEventListener('click', () => {
//     console.log('Diste click en el boton');
// });

btn.addEventListener('click', showHideFooter);

function showHideFooter () {
    if ( footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        // btn.classList.remove('activo');
        this.classList.remove('activo'); // Se puede usar this porque hace referencia al boton, ya que el ejecuta la function
        btn.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        btn.classList.add('activo');
        this.textContent = 'Cerrar';
    }
}
