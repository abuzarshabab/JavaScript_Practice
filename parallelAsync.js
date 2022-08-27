

const getJSON = function (url, errorMsg = "Something went wrong") {

    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`(${errorMsg}) ${response.status}`);

        return response.json();
    })
}

const getCountries = async function (c1, c2, c3) {
    const [data1] = await getJSON(
        fetch(`https://restcountries.com/v3.1/name/${c1}`));
    const [data2] = await getJSON(
        fetch(`https://restcountries.com/v3.1/name/${c2}`));
    const [data3] = await getJSON(
        fetch(`https://restcountries.com/v3.1/name/${c3}`));

    console.log(data1.capital, data2.capital, data3.capital);
};
getCountries('india', 'usa', 'pakistan');