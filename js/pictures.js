import {openBigPicture} from './big-pictures.js';
import {getData} from './api.js';

const GET_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPhotos = (data) => {
  const picture = templatePicture.cloneNode(true);
  picture.querySelector('.picture__img').src = data.url;
  picture.querySelector('.picture__comments').textContent = data.comments.length;
  picture.querySelector('.picture__likes').textContent = data.likes;

  picture.addEventListener('click', () => {
    openBigPicture(data);
  });
  return picture;
};

const renderPictures = (data) => {
  data.forEach((item) => pictures.append(renderPhotos(item)));
};

const onGetSuccess = (data) => renderPictures(data);
const onGetFail = (data) => {};

const getPictureData = () => getData(GET_URL, onGetSuccess, onGetFail);

export{getPictureData};
