import './styles.css';
import refs from './refs';
import _debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import generateAnswer from './generateAnswer';

refs.input.addEventListener('input', _debounce(event => {

  const searchQuery = event.target.value;
  refs.countriesContainer.innerHTML = '';
  refs.input.innerHTML = '';

  if (searchQuery) fetchCountries(searchQuery).then(generateAnswer);
}, 500),
);


