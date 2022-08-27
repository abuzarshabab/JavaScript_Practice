navigator.geolocation.getCurrentPosition(position => {
    console.log(position)
}, err => console.error(err));

console.log('Getting Position');

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        // position => resolve(position),
        // err => reject(err));
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

// getPosition()
//     .then(pos => console.log(pos))
//     .catch(err => console.log(error))

// const { lat = latitude, lng = longitude } = position.coords;

const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
};
whereAmI('India');
console.log("First Async");