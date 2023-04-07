import {isEscapeKey} from './utils.js';

const templateSuccessMessage = document.querySelector('#success').content.querySelector('.success');
const templateFailMessage = document.querySelector('#error').content.querySelector('.error');

let failMessage;
let successMessage;

const closeSuccessMessage = () => {
  successMessage.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  successMessage = '';
};

const closeFailMessage = () => {
  failMessage.remove();
  document.removeEventListener('keydown', onDocumentKeydown);
  failMessage = '';
};

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(failMessage) {
      closeFailMessage();
      return;
    }
    closeSuccessMessage();
  }
}

const onSuccessButtonClick = (evt) => {
  evt.preventDefault();
  closeSuccessMessage();
};

const onFailButtonClick = (evt) => {
  evt.preventDefault();
  closeFailMessage();
};

const onSuccessClick = (evt) => {
  if(!evt.target.closest('.success__inner')) {
    closeSuccessMessage();
  }
};

const onFailClick = (evt) => {
  if(!evt.target.closest('.error__inner')) {
    closeFailMessage();
  }
};

const renderSuccessMessage = () => {
  successMessage = templateSuccessMessage.cloneNode(true);
  document.body.append(successMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  successMessage.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
  successMessage.addEventListener('click', onSuccessClick);
};

const renderFailMessage = () => {
  failMessage = templateFailMessage.cloneNode(true);
  document.body.append(failMessage);
  document.addEventListener('keydown', onDocumentKeydown);
  failMessage.querySelector('.error__button').addEventListener('click', onFailButtonClick);
  failMessage.addEventListener('click', onFailClick);
};

export {renderSuccessMessage, renderFailMessage};
