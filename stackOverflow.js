class PersonCl {

    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    // Methods will be added to .prototype property
    calcAge() {
        console.log(2021 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.firstName} `)
    }
    get age() {
        return 2021 - this.birthYear;
    }


    set firstName(name) {
        this._firstName = name;
    }
    get firstName() {
        return this._firstName;
    }

}


const rohan = new PersonCl('Rohan', 1998);
console.log(rohan.firstName)

rohan.firstName = 'Rohan pareek';


// rohan.calcAge();
// console.log(rohan.firstName);
