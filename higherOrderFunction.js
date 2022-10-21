const radiusArray = [3, 4, 5, 6];

const area = function (radius) {
  return Math.PI * Math.pow(radius, 2);
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

/* 
// Using Higher order function
const calculate = function (radius, formula) {
  const result = []
  for(let i = 0; i < radius.length; i++) { 
    result.push(formula(radius[i]))
  }
  return result
}

console.log(calculate(radiusArray, area))
console.log(calculate(radiusArray, circumference))
console.log(calculate(radiusArray, diameter))
*/

// Using Array.Prototype

Array.prototype.calculate = function (formula) { 
  const result = []
  for(let i = 0; i < this.length; i++) {
    result.push(formula(this[i]))
  }
  return result
}

console.log(radiusArray.calculate(diameter))