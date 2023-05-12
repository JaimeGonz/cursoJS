function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const jaime = new Cliente('Jaime', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo}, categoria ${categoria}`;
}

console.log(formatearCliente(jaime));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const Novatech = new Empresa('Novatech Fx', 22000, 'Inversion');
console.log(formatearEmpresa(Novatech));
