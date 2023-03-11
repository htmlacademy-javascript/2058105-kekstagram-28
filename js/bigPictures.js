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

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButton.removeEventListener('click', onBigPictureCloseClick);
  document.removeEventListener('keydown', onDocumentKeydown);
};

const openBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  getBigPhotos(data);

  closeButton.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onDocumentKeydown);

  let comment = 0;
  let finish = 5;

  socialCommentsList.innerHTML = '';
  const getComments = (comments, start = 0, end = 5) => {
    while(start < end && start < comments.length) {
      const commentItem = socialComment.cloneNode(true);
      commentItem.querySelector('.social__picture').src = comments[start].avatar;
      commentItem.querySelector('.social__picture').alt = comments[start].name;
      commentItem.querySelector('.social__text').textContent = comments[start].message;
      socialCommentsList.append(commentItem);
      start ++;
    }
    comment = start;
    socialCommentCount.textContent = `${comment} из ${comments.length}`;
  };
  commentsLoader.addEventListener('click', () => {
    finish += 5;
    getComments(data.comments, comment, finish);
  });
  getComments(data.comments);
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
