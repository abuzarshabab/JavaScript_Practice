const funModule = {
  value : 108,
  getValue: function() {
    return this.value
  }
}

const unboundGetValue = funModule.getValue

e
console.log(unboundGetValue())

const boundGetValue = unboundGetValue.bind(funModule)

console.log(boundGetValue())


// const funModule = {
//   value : 108,
//   getValue: function() {
//     return this.value
//   }
// }
// const funcNewModule = {
//   value : 1090,
// }

// const boundOne = funModule.getValue.bind(funModule)
// console.log(boundOne())

// const boundTwo = funModule.getValue.bind(funcNewModule)
// console.log(boundTwo())

// const funModule = {
//   value : 108,
//   getValue: function() {
//     return this.value
//   }
// }
// const funcNewModule = {
//   value : 1090,
// }

// const boundOne = funModule.getValue.apply(funcNewModule)
// console.log(boundOne)

// const boundTwo = funModule.getValue.bind(funModule)
// console.log(boundTwo())