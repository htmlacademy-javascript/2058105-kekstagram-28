import {isEscapeKey} from './utils.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const buttonCloseForm = document.querySelector('#upload-cancel');

const openFile = () => {
  imageUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeFile = () => {
  imageUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFile();
  }
}

const makeForm = () => {
  uploadFile.addEventListener('change', openFile);
  buttonCloseForm.addEventListener('click', closeFile);
};

makeForm();
export{makeForm};
