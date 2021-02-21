import refs from './refs';

function createList(countries) {
    let listItems = [];
    countries.map(item => {
        listItems.push(`<ul><li>${item.name}</li></ul>`)
     });
    refs.countriesContainer.innerHTML = '';
    refs.countriesContainer.insertAdjacentHTML('beforeend', listItems.join(''));
}

export default createList;