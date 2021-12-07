// setTimeout(() => {
//     console.log('Hello Mr...')
// }, 3000);

const ingredients = ['olives', 'spinach']

// let food = setTimeout((ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`), 4000, ...ingredients
// );

// console.log('The Set Timeout will be fired soon..');
// if (ingredients.includes('butter')) clearTimeout(food);
let counter = 1;
let timerInt = setInterval(() => {
    console.log('Hello This is from interval');
    var now = new Date();
    console.log(now.getSeconds());
    if (counter++ >= 10)
        clearInterval(timerInt);
    console.log(counter);
}, 1000)

setTimeout