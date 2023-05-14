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

// Inheritance
class Company extends Client {
    constructor(name, balance, phone, category) {
        super(name, balance);
        this.phone = phone;
        this.category = category;
    }

    static welcome() { // Rewrites the previous method
        return `Welcome to the company's ATM`;
    }
}

const jaime = new Client('Jaime', 400);
const company = new Company('ModaSimple', 500, 3123206062, 'ETSY');
console.log(company);
console.log(company.showInfo());

console.log(Company.welcome());
