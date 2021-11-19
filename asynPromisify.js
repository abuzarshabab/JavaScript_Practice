const promisify = require('util').promisify;

async function asyncRunner() {
  try {
    const slowResult = await promisify(slowFunction)()
    const fastResult = await promisify(fastFunction)()
    console.log('all done')
    return [
      slowResult,
      fastResult
    ]
  } catch (error) {
    console.error(error)
  }
}
console.log(5 / 0);


function oddEven(number) {
  return number % 2 === 0 ? 'even' : 'odd'
}
function greatestOfThree(a, b, c) {
  return Math.max(a, b, c)
}
function calculateAge(yearOfBirth) {
  return 2018 - yearOfBirth
}
function factorial(number) {
  if (number === 0) {
    return 1
  }
  return number * factorial(number - 1)
}
// Gratest common divisor
function gcd(a, b) {
  if (b === 0) {
    return a
  }
  return gcd(b, a % b)
}
// fibonacci
function fibonacci(n) {
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10));
console.log(gcd(12, 16));
console.log(factorial(5));
console.log(calculateAge(1999));

//1. Identify bugs in code
//2. Find the bug
//2. Fix the bug