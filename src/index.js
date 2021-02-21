import './styles.css';

import refs from './refs';
import generateAnswer from './generateAnswer';
import fetchCountries from './fetchCountries';
// import notify from './notify';



refs.input.addEventListener('input', event => {

  const searchQuery = event.target.value;

  refs.countriesContainer.innerHTML = '';
  refs.input.innerHTML = '';

  fetchCountries(searchQuery).then(generateAnswer);
});


