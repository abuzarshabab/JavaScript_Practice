'use strict'

const orders = [
    'pizza',
    'pasta',
    'momose',
    'pizza',
    'eggs',
    'pasta',
    'samose',
    'eggs',
    'coffee',
]
const orderedDishes = new Set(orders);
orderedDishes.add('roll', 'moll');
orderedDishes.delete('eggs');
orderedDishes.has('pizza');
orderedDishes.size;
console.log(orderedDishes)
const confirmedDish = [...orderedDishes];
console.log(confirmedDish);