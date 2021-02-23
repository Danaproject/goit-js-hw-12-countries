import createMarkup from './createMarkup';
import createList from './createList';
import notify from './notify';

function generateAnswer(countries) {
const number = countries.length;
if (number > 10) {
  notify();
} else if (number >= 2) {
  createList(countries);
} else if (number === 1) {
  createMarkup(countries);
}
}

export default generateAnswer;