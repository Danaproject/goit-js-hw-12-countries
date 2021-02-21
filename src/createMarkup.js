import countryTpl from './country.hbs';
import refs from './refs';

function createMarkup(countries) {
    refs.countriesContainer.innerHTML = '';
    refs.countriesContainer.insertAdjacentHTML('beforeend', countryTpl(countries));
}

export default createMarkup