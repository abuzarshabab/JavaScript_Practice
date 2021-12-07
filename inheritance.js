const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
}

const Student = function (firstName, birthYear, course) {
    // this.firstName = firstName;  This violate Dry principle
    // this.birthYear = birthYear;
    Person.call(this, firstName, birthYear);
    this.course = course;
}


// Linking ProtoType
Student.prototype = Object.create(Person.prototype);  // We did this
console.log(Person.prototype);
Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}


const somesh = new Student('Somesh Shakya', 1999, 'Computer Science');

// somesh.introduce();
// somesh.calcAge();

console.log(somesh instanceof Student);
console.log(somesh instanceof Person);

console.log(somesh instanceof Object);