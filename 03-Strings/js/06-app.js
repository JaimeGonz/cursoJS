const producto = 'Monitor 20 pulgadas';

// .repeat repite una cadena de texto

const texto = ' en Promoción'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`)

// .split dividir un string
const actividad = "Estoy aprendiendo JavaScript";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModerno"
console.log(tweet.split("#"));
