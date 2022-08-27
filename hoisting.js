getName() // At this place in memory x will be undefined and getName is full function. It will add getName() into stack and gets executed.
console.log(x)
console.log(getName)

var x = 7;

function getName() {
  var greet = x
  console.log(greet)
  console.log("Namaste JavaScript")
}