import refs from './refs';

function createList(countries) {
    let listItems = [];
    countries.map(item => {
        listItems.push(`<ul class="suggestions"><li>${item.name}</li></ul>`)
     });
    refs.countriesContainer.innerHTML = '';
    refs.countriesContainer.insertAdjacentHTML('beforeend', listItems.join(''));
}

export default createList;