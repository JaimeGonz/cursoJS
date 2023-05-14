// Class declaration
class Client {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    showInfo() {
        return `Client: ${this.name}, your balance is ${this.balance}`;
    }

    // This function belongs to the class, error if the instance calls for it
    static welcome(){
        return `Welcome to the ATM`;
    }
}

const jaime = new Client('Jaime', 400);
console.log(jaime);
console.log(jaime.showInfo());

console.log(Client.welcome());

// class expression
const Client2 = class {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }
}

const jaime2 = new Client2('Valdo', 1000);
console.log(jaime2);
