import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');

const getBigPhotos = (data) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;
};

const getComments = (data) => {
  socialCommentsList.innerHTML = '';
  data['comments'].forEach((comment) => {
    const commentItem = socialComment.cloneNode(true);
    commentItem.querySelector('.social__picture').src = comment.avatar;
    commentItem.querySelector('.social__picture').alt = comment.name;
    commentItem.querySelector('.social__text').textContent = comment.message;
    socialCommentsList.append(commentItem);
  });
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  getBigPhotos(data);
  getComments(data);
  closeButton.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
};

function onBigPictureCloseClick (evt) {
  evt.preventDefault();
  closeBigPicture();
}

function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
}

export{openBigPicture};
