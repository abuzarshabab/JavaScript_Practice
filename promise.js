const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening 🔥🔥🔥');

    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('You WIN 💰💰💰');
        } else {
            reject(new Error('You Lost you Money'));
        }
    }, 200)

});

lotteryPromise
    .then(res => console.log(res))
    .catch(err => {
        console.error(err);
    })

// Promisifying setTimeout 
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log('I waited for 2 Second');
        return wait(3);
    })
    .then(() => {
        console.log('I also waited for 3 second')
        return wait(3);
    })
    .then(() => {
        console.log('I also waited for 3 second')
        return wait(3);
    })
    .then(() => {
        console.log('I also waited for 3 second')

    })

Promise.resolve('Hello resolved Promise').then(x => console.log(x));
Promise.reject('Hello rejected promise').catch(rej => console.log(rej));
