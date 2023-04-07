import {renderPictures} from './pictures.js';
import {shuffleArray, debounce} from './utils.js';

const RANDOM_PHOTOS_COUNT = 10;
const RERENDER_DELAY = 500;
const DISCUSSED_ID = 'filter-discussed';
const RANDOM_ID = 'filter-random';
const filters = document.querySelector('.img-filters');

const removePictures = (pictures) => {
  pictures.forEach((picture) => picture.remove());
};

const rerenderPictures = (data, id) => {
  let dataCopy = data.slice();
  removePictures(document.querySelectorAll('.picture'));
  if (id === DISCUSSED_ID) {
    dataCopy = dataCopy.sort((a, b) => b.comments.length - a.comments.length);
  }
  if (id === RANDOM_ID) {
    dataCopy = shuffleArray(dataCopy).slice(0, RANDOM_PHOTOS_COUNT);
  }
  renderPictures(dataCopy);
};

const rerenderTimeOut = debounce((data, id) => rerenderPictures(data, id), RERENDER_DELAY);

const onFilterClick = (evt, data) => {
  if(evt.target.closest('.img-filters__button') && !evt.target.closest('.img-filters__button--active')) {
    document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
    evt.target.classList.add('img-filters__button--active');
    const id = evt.target.id;
    rerenderTimeOut(data, id);
  }
};

const unitFilter = (data) => {
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', (evt) => {
    onFilterClick(evt, data);
  });
};

export {unitFilter};
