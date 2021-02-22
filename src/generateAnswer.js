import createMarkup from './createMarkup';
import createList from './createList';
import notify from './notify';

function generateAnswer(countries) {
  if (countries.status !== 404) {
    const number = countries.length;
    if (number === 1) createMarkup(countries);
    if (number >= 2 & number <= 10) createList(countries);
    if (number > 10) notify();
  }  
}

export default generateAnswer;