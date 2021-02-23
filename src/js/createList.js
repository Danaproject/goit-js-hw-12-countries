import refs from './refs';

function createList(countries) {
    const listItems = countries.map(({ name }) => `<ul class="suggestions"><li>${name}</li></ul>`).join('');
    refs.countriesContainer.insertAdjacentHTML('beforeend', listItems);
}

export default createList;
