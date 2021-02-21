import './styles.css';
import refs from './refs';
import fetchCountries from './fetchCountries';
import createMarkup from './cteateMarkup';


refs.input.addEventListener('input', event => {

  const searchQuery = refs.input.value;

  refs.countriesContainer.innerHTML = '';
  refs.input.innerHTML = '';

  fetchCountries(searchQuery).then(createMarkup);
});
