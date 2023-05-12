// Constructors
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Make the quotation with the data
Insurance.prototype.quoteInsurance = function() {
    /*
        1 = American -> 1.15 increment
        2 = Asian -> 1.05 increment
        3 = European -> 1.35 increment
    */


    let quantity;
    const base = 2000;

    switch(this.brand) {
        
        case '1':
            quantity = base * 1.15;
            break;

        case '2':
            quantity = base * 1.05;
            break;

        case '3':
            quantity = base * 1.35;
            break;

        default:
            break;
    }

    // Get year
    const difference = new Date().getFullYear() - this.year;

    // Each year that the difference is greater, the cost will be reduced by 3%
    quantity -= ((difference * 3) * quantity) / 100;
    console.log(quantity);

    /* 
        If the insurance is basic, it is multiplied by an additional 30%
        If the insurance is full, it is multiplied by an additional 50%
    */

    if (this.type === 'basic') {
        quantity *= 1.30;
    } else {
        quantity *= 1.50;
    }

    return quantity;
}

function UI() {}

// Fill year options
// Arrow function when this is not used
UI.prototype.fillOptions = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');
    for( let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

// Show alerts on screen
UI.prototype.showMessage = (message, type) =>  {
    const div = document.createElement('div');

    div.classList.add('mensaje', 'mt-10');
    div.textContent = message;

    if (type === 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    const form = document.querySelector('#quote-insurance');
    const result =  document.querySelector('#result');
    form.insertBefore(div, result);

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.showTotal = (total, insurance) => {

    const {brand, year, type} = insurance;
    let textBrand;

    switch(brand) {
        
        case '1':
            textBrand = 'American'
            break;

        case '2':
            textBrand = 'Asian'
            break;

        case '3':
            textBrand = 'European'
            break;
        default:
            break;
    }

    // Create result
    const div = document.createElement('div');
    div.classList.add('mt-10');

    // innerHTML When div contains HTML
    div.innerHTML = `
        <p class="header">Summary</p>
        <p class="font-bold">Brand: <span class="font-normal">${textBrand}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Insurance type: <span class="font-normal capitalize">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    const resultDiv = document.querySelector('#result');

    // Show spinner
    const spinner = document.querySelector('#loading');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultDiv.appendChild(div);
    }, 3000);
}

// Instantiate UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.fillOptions(); // Fill select with years...
});

eventListeners();
function eventListeners() {
    const form = document.querySelector('#quote-insurance');
    form.addEventListener('submit', quoteInsurance);
}

function quoteInsurance(e) {
    e.preventDefault();

    // Get selected brand
    const brand = document.querySelector('#brand').value;

    // Get selected year
    const year = document.querySelector('#year').value;

    // Get selected type
    const type = document.querySelector('input[name="type"]:checked').value;
    // console.log(type);

    if(brand === '' || year === '' || type === '') {
        ui.showMessage('All fields are required', 'error');
        return;
    } 
    
    ui.showMessage('Quoting...', 'success');
    
    // Hide previous quotings
    const prevResults = document.querySelector('#result div');
    if (prevResults !== null){
        prevResults.remove();
    }

    // Instance insurance constructor
    const insurance = new Insurance(brand, year, type);
    const total = insurance.quoteInsurance();

    // Prototype
    ui.showTotal(total, insurance);
}
