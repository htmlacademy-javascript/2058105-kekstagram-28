import {isEscapeKey} from './utils.js';
import {validateForm} from './validation-form.js';

const imageUpload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const buttonCloseForm = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');

const openForm = () => {
  imageUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  textHashtags.addEventListener('keydown', onInputKeydownEscape);
  textDescription.addEventListener('keydown', onInputKeydownEscape);
};

const closeForm = () => {
  imageUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  textHashtags.removeEventListener('keydown', onInputKeydownEscape);
  textDescription.removeEventListener('keydown', onInputKeydownEscape);
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
}

function onInputKeydownEscape (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}

const uploadForm = () => {
  uploadFile.addEventListener('change', openForm);
  buttonCloseForm.addEventListener('click', closeForm);
  validateForm();
};

export{uploadForm};
