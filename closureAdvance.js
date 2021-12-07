
const secureBooking = function () {
    const outerScopeLv1 = 'Outer level 1';
    return function () {
        let birthPlace = 'should be hidden';
        let passengerCount = 0;
        return function () {
            passengerCount++;
            console.log(`${passengerCount} passenger and outerScopeLv1 : "${outerScopeLv1}" outerScopeLv2 ${outerScopeLv2}`);
        }
    }
}


const outerScopeLv2 = 'Outer Level2';
const booker = secureBooking()();
booker();
booker();
booker();
console.dir(booker);


