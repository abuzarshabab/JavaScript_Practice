
const book = function (flightNum, name) {
    console.log(`${name} booked a seat of ${this.airline} flight ${this.iataCode} ${flightNum}`);
    this.bookings.push({
        flight: `${this.iataCode} ${flightNum} `, name
    })
}
// First object
const Lufthansa = {
    airline: 'Luftahnsa',
    iataCode: 'LH',
    bookings: [],
    // Book function()
    book,

};
Lufthansa.book(239, 'Abuzar Shabab');
// Lufthansa.book(239, 'Priyanshu Mishra');

// Second Object 
const Eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    book,
};

// const book = Lufthansa.book;


// Non working
// book('21H2', 'Somesh');

// working with call method 
// book.call(Lufthansa, '21H33', 'Rohan Pareek');
// book.call(Eurowings, 'f9', 'Ajay Sir');
// book.call(Eurowings, 'f9', 'Deepak Patel');
// book.call(Lufthansa, 'Winter', 'Deepak Deshkar');

console.log(Lufthansa.bookings);
console.log(Eurowings.bookings);

const bookLT = book.bind(Lufthansa);
const bookEW = book.bind(Eurowings);
const bookEW23 = book.bind(Eurowings, 23);

bookLT('r151', 'King of The Era');
bookEW('e687', 'Shot Dead');
bookEW23('Jai Kishan');
console.log(bookLT);

// Partial Application using bind method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.5, 1000));

const addVat = addTax.bind(null, 0.18);
console.log(addVat(33200));

// Application using 
