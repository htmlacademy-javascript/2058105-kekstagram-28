import {addScale, resetScale} from './photo-scale.js';
import {isEscapeKey} from './utils.js';
import {validateForm} from './validation-form.js';
import {addEffect, resetEffect, createSlider} from './photo-effects.js';

const imageUploadForm = document.querySelector('.img-upload__form');
const imageUpload = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const buttonCloseForm = document.querySelector('#upload-cancel');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const effects = document.querySelector('.effects');

const onEffectsChange = (evt) => addEffect(evt);

const openForm = () => {
  imageUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  textHashtags.addEventListener('keydown', onInputKeydownEscape);
  textDescription.addEventListener('keydown', onInputKeydownEscape);
};

const closeForm = () => {
  imageUploadForm.reset();
  resetScale();
  resetEffect();
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

const addUploadForm = () => {
  uploadFile.addEventListener('change', openForm);
  buttonCloseForm.addEventListener('click', closeForm);
  effects.addEventListener('change', onEffectsChange);
  validateForm();
  addScale();
  createSlider();
};

export{addUploadForm};
