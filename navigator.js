


// const whereAmI = async function (country) {
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     const data = await res.json();

//     console.log(...data);
// };
// whereAmI('India');
// console.log("First Async");

const getJSON = function (url, errorMsg = "Something went wrong") {

    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`(${errorMsg}) ${response.status}`);

        return response.json();
    })
}

const getCountries = async function (c1, c2, c3) {
    // const [data1] = await getJSON(
    //     (`https://restcountries.com/v3.1/name/${c1}`));
    // const [data2] = await getJSON(
    //     (`https://restcountries.com/v3.1/name/${c2}`));
    // const [data3] = await getJSON(
    //     (`https://restcountries.com/v3.1/name/${c3}`));
    // console.log(data1.capital, data2.capital, data3.capital);

    /* Rejected if one of the promise return false */
    // const countries = await Promise.all([
    //     getJSON(
    //         (`https://restcountries.com/v3.1/name/${c1}`)),
    //     getJSON(
    //         (`https://restcountries.com/v3.1/name/${c2}`)),
    //     getJSON(
    //         (`https://restcountries.com/v3.1/name/${c3}`))
    // ])
    // console.log(...countries)

    /* Full filled if one of the promise  */

    const countries = await Promise.race([
        getJSON(
            (`https://restcountries.com/v3.1/name/${c1}`)),
        getJSON(
            (`https://restcountries.com/v3.1/name/${c2} `)),
        getJSON(
            (`https://restcountries.com/v3.1/name/${c3}`))
    ])
    console.log(...countries);



};
getCountries('india', 'usa', 'pakistan');