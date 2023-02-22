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
  'Я бомж'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?'
];

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getUniqId = (min, max) => {
  const previousId = [];
  return function () {
    let currentId = getRandomInteger(min, max);
    if (previousId.length >= (max - min + 1)) {
      return null;
    }
    while (previousId.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }
    previousId.push(currentId);
    return currentId;
  };
};

const photoId = getUniqId(1, 25);
const urlPhotoId = getUniqId(1, 25);
const commentId = getUniqId(1, 25);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];
const SIMILAR_PHOTOS_COUNT = 25;

const createComment = () => {
  const comment = {
    id: commentId(),
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
  }; return comment;
};

const createPhoto = () => {
  const photo = {
    id: photoId(),
    url: `photos/${urlPhotoId()}.jpg`,
    descripton: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: createComment()
  };
  return photo;
};

const similarPhotos = Array.from({length: SIMILAR_PHOTOS_COUNT}, createPhoto);
console.log(similarPhotos);
