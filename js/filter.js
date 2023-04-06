import {renderPictures} from './pictures.js';
import {shuffleArray} from './utils.js';

const RANDOM_PHOTOS_COUNT = 10;
const filters = document.querySelector('.img-filters');

const removePictures = (pictures) => {
  pictures.forEach((picture) => picture.remove());
};

const rerenderPictures = (data, id) => {
  const dataCopy = data.slice();
  let sortArray = dataCopy;
  removePictures(document.querySelectorAll('.picture'));
  if (id === 'filter-discussed') {
    sortArray = dataCopy.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (id === 'filter-random') {
    sortArray = shuffleArray(dataCopy).slice(0, RANDOM_PHOTOS_COUNT);
  }
  renderPictures(sortArray);
};

const onFilterClick = (evt, data) => {
  if(evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    rerenderPictures(data, id);
  }
};

const unitFilter = (data) => {
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', (evt) => {
    onFilterClick(evt, data);
  });
};

export {unitFilter};
