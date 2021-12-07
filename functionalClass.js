// Coding Challange #1 

/* 
1. Use a constructor function to implement a Car. A
car has a make and a speed property. The speed Property is
the current speed of the car in km/h;

2. Implement an 'accelerate' method that will decrease the car's speed by
10, and log the new speed to the console;

3. Implement a 'brake' method that will decrease the car's speed by 5,
and log the new speed to the console;

4. create 2 car objects and experiment with calling accelerate and 'break' 
multiple times on each of them.

Data Set Car 1: 'BMW' going at 120 km/h
Data set Car 2: 'Mercedes' going at 95 km/h


with private properties and methods 
*/

class CarCl {
    make = "Generic";
    constructor(make, speed) {

        this.make = make;
        this.speed = speed;

    }
    #showSpeed() {
        console.log(`${this.make} is travelling at the speed of ${this.speed} Km/h`)
    }
    accelerate() {
        this.speed += 10;
        this.#showSpeed();
    }
    brake() {
        this.speed -= 5;
        this.#showSpeed();
    }
    get speedUS() {
        return `${this.make} is travelling at the speed of ${this.speed / 1.6} M/h`;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Car.prototype.accelerate = function () {
//     this.speed += 10;
// };
// Car.prototype.brake = function () {
//     this.speed -= 5;
// }
// Car.prototype.showSpeed = function () {
//     console.log(`'${this.make}' going at ${this.speed} Km/h`);
// }

let bmw = new CarCl('BMW', 100);

bmw.accelerate();
bmw.speedUS = 80;
bmw.brake();
console.log(bmw.speedUS);
// bmw.showSpeed();
// console.log(bmw)
// bmw.accelerate();

// bmw.showSpeed();
// bmw.accelerate();;
// bmw.showSpeed();

// bmw.brake();
// bmw.showSpeed();

// setInterval(bmw.showSpeed, 1000);
// setInterval(bmw.accelerate, 2000);