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

class StudentCl extends PersonCl {
    constructor(firstName, birthYear, course) {
        // Always needs to happen first!
        super(firstName, birthYear)
        this.course = course;
    }
    introduce() {
        console.log(`My name is ${this.firstName} and I study ${this.course}`);
    }
    calcAge() {
        console.log(`I'am ${2037 - this.birthYear} and I study ${this.course}`);
    }
}

const dark = new StudentCl('Martha-Jonas', 1998, 'Bacheler of Computer Science');
dark.introduce();
dark.calcAge();

// const rohan = new PersonCl('Rohan', 1998);
// console.log(rohan.firstName)
// rohan.firstName = 'Rohan pareek'
// rohan.calcAge();
// console.log(rohan.firstName);
