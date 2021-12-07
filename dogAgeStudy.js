// const DogsFirst = [5, 2, 4, 1, 15, 8, 3];
const DogsFirst = [16, 6, 10, 5, 6, 1, 4];

// Old method or long method
// const dogsHumanAge = Dogs.map(dogAge => {
//     if (dogAge <= 2) {
//         return 2 * dogAge;
//     } else {
//         return 16 + 4 * dogAge;
//     }
// })

// Short method

const dogsHumanAge = DogsFirst.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge);
// console.log('Dogs Human Age ', dogsHumanAge);

//----------------- Filtering adult dogs -------------------------------

const adultDogs = dogsHumanAge.filter((dogAge, dogIndex, dogs) => dogAge >= 18);
// console.log('Adult Dogs', adultDogs);

//----------------- Average Dogs age -----------------------------------
const dogsAverageAge = adultDogs.reduce((prev, dogAge, _, dogs) => prev += dogAge / dogs.length, 0);
console.log('Average Age of adult Dogs', Math.round(dogsAverageAge));

//----------------- Whole coding challenge using chaining --------------

const firstDogsAverageAge = DogsFirst.map(dogAge => dogAge <= 2 ? 2 * dogAge : 16 + 4 * dogAge).filter(dogAge => dogAge >= 18).reduce(((accumulator, dogAge, _, dogs) => accumulator += dogAge / dogs.length), 0);;

console.log(Math.round(firstDogsAverageAge));
//