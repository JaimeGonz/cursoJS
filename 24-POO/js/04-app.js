// Class declaration
class Client {
    // constructor(name, balance) {
    //     this.#name = name;
    //     this.balance = balance;
    // }

    // showInfo() {
    //     return `Client: ${this.#name}, your balance is ${this.balance}`;
    // }

    // // This function belongs to the class, error if the instance calls for it
    // static welcome(){
    //     return `Welcome to the ATM`;
    // }

    #name; // private attribute

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const jaime = new Client();
jaime.setName('Valdo');
console.log(jaime.getName());
