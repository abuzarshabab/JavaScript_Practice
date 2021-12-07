
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;

    this.accelerate = function () {
        this.speed += 10;
        this.showSpeed();

    }

};

Car.prototype.showSpeed = function () {
    console.log(`${this.make} is traveling at ${this.speed} Km/h`)
}


Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is traveling at ${this.speed} Km/h`)
}


const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
}
EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} is traveling at ${this.speed} Km/h`)
}
const tesla = new EV('tesla', 120, 26);

const Bmw = new Car('bmw', 200);

Bmw.accelerate();
tesla.chargeBattery(20);
tesla.accelerate();
tesla.accelerate();



// Why i am not able to make a function in this 