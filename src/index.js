import './styles.css';
import refs from './js/refs';
import _debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import generateAnswer from './js/generateAnswer';

refs.input.addEventListener('input', _debounce(event => {

  const searchQuery = event.target.value.trim();
  refs.countriesContainer.innerHTML = '';
  refs.input.innerHTML = '';

  if (searchQuery) { 
    fetchCountries(searchQuery).then(generateAnswer);
  }}, 500),
);


