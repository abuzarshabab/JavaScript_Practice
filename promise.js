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