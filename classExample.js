
// 'use strict'
name = 'priti';
class Account {
    // Public Fields 

    locale = "navigator.language";


    // Privete Fields
    #movements = [];
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.pin = pin;
        this.locale = 'hello';
        console.log(`Thanks for opening an account, ${owner}`)
    }

    // Public Interface
    deposit(val) {
        this.#movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val);
    }
}

const accMe = new Account('jonas', 'EUR', 1111);

accMe.deposit(178);
accMe.deposit(-34);
accMe.withdraw(30);
console.log(accMe);