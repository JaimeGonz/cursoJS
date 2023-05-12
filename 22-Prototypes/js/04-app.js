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


function Persona(nombre,saldo,telefono ) {
    // this.nombre = nombre;
    // this.saldo = saldo;
    // Herencia desde Cliente
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
} // Solo hereda atributos, no funciones

// Copia el prototipo de Cliente, y asigna funciones a Persona
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instancia
const valdo = new Persona('Valdo', 20000, 3123206062);
console.log(valdo);
console.log(valdo.nombreClienteSaldo());

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}

console.log(valdo.mostrarTelefono());
