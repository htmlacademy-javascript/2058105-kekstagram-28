import {createPhotos} from './data.js';
import {openBigPicture} from './bigPictures.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const dataPhotos = createPhotos();
const dataPhotosFragment = document.createDocumentFragment();

const renderPhotos = () => {
  dataPhotos.forEach((photo) => {
    const picture = templatePicture.cloneNode(true);
    picture.querySelector('.picture__img').src = photo.url;
    picture.querySelector('.picture__comments').textContent = photo.comments.length;
    picture.querySelector('.picture__likes').textContent = photo.likes;
    dataPhotosFragment.append(picture);

    picture.addEventListener('click', () => {
      openBigPicture(photo);
    });
  });
  pictures.append(dataPhotosFragment);
};

export{renderPhotos};
