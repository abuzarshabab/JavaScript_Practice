'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


};

const openingHours = {
    [weekDays[3]]: {
        open: 12,
        close: 22,
    },
    [weekDays[4]]: {
        open: 11,
        close: 23,
    },
    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
}
// For of Loop Nullish
for (const day of weekDays) {
    const status = openingHours[day]?.open
    // console.log(status || status == 0 ? `on ${day} we, Open at ${status}` : `on ${day} we, closed`);
    // console.log(status);
}
// Object iteration 
const properties = Object.keys(openingHours);
const values = Object.values(openingHours);
const Entries = Object.entries(openingHours)
// console.log(values)
let openStr = `We are open on ${properties.length} : `;

// for (const day of properties) {
//     openStr += `${day}, `
// }
// console.log(openStr);

for (const [key, { open, close }] of Entries) {
    console.log(open, close);

}


// Mutating Variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b)

// Nested Objects
const arr = [2, 4, ...[12, 21, 3]];

// console.log(arr);
const newArr = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(newArr);

const str = 'My name is khaan';

// console.log(...str)
const strArreay = ['h', 'i', ...str]

// console.error(strArreay);
const newRest = { ...restaurant, whoAreYou: 'myBaby' }
// console.log(newRest)

// Functions using Spread and Rest

const add = function (...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

const spreadArray = [5, 3, 6, 7, 8, 7];

// console.log(add(...spreadArray));
// console.log(add(3, 3, 4, 5, 6));


const rest1 = {
    name: 'capri',
    numGuests: 20,
}
const rest2 = {
    name: "La Piazza",
    owner: "goSwami gupta",
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;


rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);
// console.log(restaurant);

console.log()