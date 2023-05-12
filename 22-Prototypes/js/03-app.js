function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Crear funcion solo para objetos tipo Cliente
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if (this.saldo > 10000){
        tipo = 'Gold';
    } else if (this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Bronze';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retiro) {
    this.saldo -= retiro;
}

// Instancia
const pedro = new Cliente('Pedro', 6000);
console.log(pedro);
console.log(pedro.tipoCliente());
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());
