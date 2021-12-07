'use strict'

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    this.getName = function () {
        console.log(firstName);
    }

};

const abuzar = new Person('abuzar', 1999);
abuzar.getName();
console.log(abuzar);

Person.prototype.calcAge = function () {
    console.log(2021 - this.birthYear);
};

abuzar.calcAge();