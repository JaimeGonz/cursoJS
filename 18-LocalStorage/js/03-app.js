// Delete elements from localstorage
localStorage.removeItem('nombre');
localStorage.removeItem('mes');

// Update a record
const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('Nuevo mes')
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));

// Delete all from localstorage
localStorage.clear();