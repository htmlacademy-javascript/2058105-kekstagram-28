import {getRandomInteger, getRandomArrayElement} from './utils.js';

const NAMES = [
  'Барт Симпсон',
  'Гена Букин',
  'Илон Маск',
  'Бред Питт',
  'Николь Кидман',
  'Джонни Депп'
];

const DESCRIPTIONS = [
  'Люблю поесть',
  'Подпишитесь на меня, поставьте лайки',
  'Люблю постить всякую ерунду',
  'Хочу поехать серфить в Африку',
  'Я бомж',
  'Сегодня отличная погода'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const PHOTOS_COUNT = 25;
let photoId = 1;
let commentId = 1;

const createMessage = () => {
  const messages = Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGES));
  return [...new Set(messages)].join(' ');
};

const createComment = () => {
  const comment = {
    id: commentId,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: createMessage(),
    name: getRandomArrayElement(NAMES),
  };
  commentId += 1;
  return comment;
};

const createPhoto = () => {
  const photo = {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(1, 10)}, createComment)
  };
  photoId += 1;
  return photo;
};

const createPhotos = () => Array.from({length: PHOTOS_COUNT}, createPhoto);

export {createPhotos};
