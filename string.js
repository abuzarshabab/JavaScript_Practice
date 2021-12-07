const airline = 'TAP Air Portugal';
let plane = 'A320';

console.log(plane[0]);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(plane = airline.slice(airline.indexOf(' ') + 1, airline.lastIndexOf(' ')));
console.log(plane.length)
console.log(airline.slice(-8));

const passenger = 'aBUzaR ShaBaB';

const Passenger = passenger[0].toUpperCase() + passenger.slice(1).toLowerCase();

console.log(Passenger);

const email = 'abuzarshabab@gmail.com';
const loginEmail = '  abuzarShabab@gmail.com';

console.log(loginEmail.trim().toLowerCase());

// Replacing String 

const priceEurope = '255,32£';
const priceUS = priceEurope.replace('£', '$').replace(',', '.');
console.log(priceUS);

//String replacement
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'))


// Methods  startWith , includes , split
const words = 'a+very+nice+song';
console.log(words.split('+'));

const fullName = "mr abuzar shabab";

const capitalizeName = function (name) {
    let actualName = '';
    const names = name.split(' ');
    names.forEach(word => {
        actualName += ' ' + word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    return actualName.slice(1);
}
const Card = '1234808950501212';
function creditCardPartial(cardNumber) {

    return cardNumber.slice(10).padStart(16, '#');
}

console.log(capitalizeName(fullName));
console.log(capitalizeName('Hello my naMe is AbuZar ShabdsDASDSab'));
console.log(creditCardPartial(Card));