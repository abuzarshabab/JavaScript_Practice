const arr = [ 2, 4, 6, 6, 4, -10, 2, 90]

// sum or max 

function findMax (arr) {
  let MAX = arr[0]
  for(let i = 1; i < arr.length; i++) {
    if(MAX < arr[i]) {
      MAX = arr[i]
    }
  }
  return MAX
}
console.log(findMax(arr))

const maxValue = arr.reduce(function (max, currentValue) {
  if(currentValue > max)  {
    max = currentValue;
  }
  return max
}, 0)
console.log(maxValue)


console.log((undefined <= 0))
// console.log(arr.reduce((previousValue = 2, currentValue) => previousValue * currentValue ))

