class PersonCl {

    constructor(name, email, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
        this.email = email;
        this.age = (function () { return (new Date().getFullYear()) - (this.birthYear) })();
    }

    greet() {
        console.log(`Hey MR ${this.name} your e-mail id is ${this.email} and age is ${this.age}`);
    }
    get age() {
        return this.age;
    }

}


const priyanshu = new PersonCl('Priyanshu', 'PriyanshuMishra@gmail.co', 2003);
console.log(priyanshu.age);
// priyanshu.greet();


