var x = 1;
var y = 54

a()

console.log(x)
function a () {
  var parent = 10
  function d () {
    console.log(x)
    console.log(y)
    console.log(parent)
    b()
  }
  d()
  console.log(x)
}

function b () {
  var x = 100
  console.log(x)
}
