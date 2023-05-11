// Get name from local storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

// Convert string object to object
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));

// String array to array
const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
