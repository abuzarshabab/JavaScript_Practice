const getLocation = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            if (!response.ok) throw new Error(`problem with geocoding ${response.status}`);
            response.json()
        })
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log('Error in request ', err.message);
        })
}
getLocation(52.508, 13.181);