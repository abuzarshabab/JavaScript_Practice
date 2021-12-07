'use strict'

const PersonProto = {

    calcAge() {
        console.log(2021 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

const jay = Object.create(StudentProto);
jay.init('jay', 1994, 'CS IT');
console.log(jay);
jay.calcAge()