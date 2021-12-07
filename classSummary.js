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
class Student extends PersonCl {
    university = "university or lebnan"
    #studyHour = 0;
    #course;

    static numSubjects = 10;

    constructor(fullName, birthYear, startYear, course) {
        super(fullName, birthYear);
        this.startYear = startYear;
        this.#course = course;
    }

    introduce() {
        console.log(`I study ${This.#course} at ${this.university}`);
    }

    study(h) {
        this.#makeCoffee();
        this.#studyHour = h;
    }

    #makeCoffee() {
        return 'Here is coffe for you 🤣';
    }
    get testScore() {
        return this._testScore;
    };

    static printCurriculum() {
        console.log(`There are ${this.numSubjects} subjects`);
    }
}
const student = new Student('Julie', 2020, 2037, 'Medicine');