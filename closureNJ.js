var b = 'Unchanged';

function grandParent(params) {
  let deepest = 2000
  function parent() {
    let a = 7 
    let deepest = 'newer value'
    function child() {
      console.log(a, b, deepest)
    }
    a = 100
    child()
  }
  parent()
}

 grandParent()
