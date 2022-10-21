console.log('Test start')

setTimeout(() => console.log('0 Second timer'), 0);

Promise.resolve('Resolved promise 1')
    .then(res => console.log(res));

Promise.resolve('Resolved Promise 2').then(res => {
    for (let i = 0; i < 10; i++) {
        console.log(res);

     }
})

console.log('Test end')