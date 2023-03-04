import {createPhotos} from './data.js';

const templatePicture = document.querySelector('#picture').content;
const pictures = document.querySelector('.pictures');
const dataPhotos = createPhotos();
const dataPhotosFragment = document.createDocumentFragment();

const renderPhotos = () => {
  dataPhotos.forEach(({url, comments, likes}) => {
    const picture = templatePicture.cloneNode(true);
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__comments').textContent = comments.length;
    picture.querySelector('.picture__likes').textContent = likes;
    dataPhotosFragment.append(picture);
  });
  pictures.append(dataPhotosFragment);
};

export{renderPhotos};
