import {isEscapeKey} from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialCommentsList = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment');
let comment = 0;
let finish = 5;

const fillBigPicture = (data) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.social__caption').textContent = data.description;
};

const createComment = (comments) => {
  const commentItem = socialComment.cloneNode(true);
  commentItem.querySelector('.social__picture').src = comments[comment].avatar;
  commentItem.querySelector('.social__picture').alt = comments[comment].name;
  commentItem.querySelector('.social__text').textContent = comments[comment].message;
  socialCommentsList.append(commentItem);
};

const renderComments = (data) => {
  const comments = data.comments;
  while(comment < finish && comment < comments.length) {
    createComment(comments);
    comment++;
  }
  socialCommentCount.textContent = `${comment} из ${comments.length}`;
  if (comment === comments.length){
    commentsLoader.classList.add('hidden');
  }
  finish += 5;
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  commentsLoader.removeEventListener('click', renderComments);
  comment = 0;
  finish = 5;
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

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  document.body.classList.add('modal-open');
  socialCommentsList.innerHTML = '';
  fillBigPicture(data);
  renderComments(data);
  closeButton.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);
  commentsLoader.addEventListener('click', () => {
    renderComments(data);
  });
};

export{openBigPicture};
