// Function statement  & Function declaration 
function sumStatement(a, b) {
  total = a + b
  console.log('Function statement called sum is ', total)
  return total
}
sumStatement(10, 20)

// Function expression 

let sumExpression = function (param1, param2) {
  total = param1 + param2
  console.log('Function statement called sum is ', total)
  return total
}

sumExpression(10, 20)

// // Anonymous function : A function without name; 
// function (a, b) {
//   console.log('Anonymous Function is called')
//   return a+b
// }
// Named Function 
let sumNamedV = function sumNamed(a, b) {
  total = a + b
  console.log('Function statement called sum is ', total)
  return total
}

sumNamed(12, 23)


// Difference Between Parameter & Argument

// First class function 

// Arrow functions 