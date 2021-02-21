function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
        .then((countries) => {
            console.log(countries);
            return countries;
      })
        .catch(error => console.log(error));
}

export default fetchCountries;