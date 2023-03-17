import {isEscapeKey} from './utils.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');

const openFile = () => {
  imageUpload.classList.remove('.hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeFile = () => {
  imageUpload.classList.add('.hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

/*function on (evt) {
  evt.preventDefault();
  evt.stopPropagation();
}*/

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFile();
  }
}

/* Нужно чтобы открывалось поле для редактирования фото, после клика.
Может я не туда обработчик повесила, открывается только поле для загрузки фото и все,
тз я отправлю тебе фотографией*/
const makeForm = () => {
  uploadFile.addEventListener('click', openFile);
};

makeForm();
export{makeForm};
