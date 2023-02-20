window.addEventListener('scroll', () => {
    // const scrollPX = window.scrollY;
    // console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); // Dice en que lugar se encuentra un elemento
    console.log(ubicacion);
    
    if( ubicacion.top < 750 ) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aun no, da mas scroll...');
    }
});
