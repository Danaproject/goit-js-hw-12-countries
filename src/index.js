import './styles.css';
import _debounce from 'lodash.debounce';
import refs from './refs';
import generateAnswer from './generateAnswer';
import fetchCountries from './fetchCountries';
// import notify from './notify';



refs.input.addEventListener('input', _debounce(event => {

  const searchQuery = event.target.value;

  refs.countriesContainer.innerHTML = '';
  refs.input.innerHTML = '';

  fetchCountries(searchQuery).then(generateAnswer);
}, 500),
);


