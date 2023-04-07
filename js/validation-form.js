const HASHTAG_REGEX = /^#[a-zа-яё0-9]{1,19}$/i;
const HASHTAG_COUNTER_ERROR = 'Не больше 5ти хештегов';
const HASHTAG_UNIG_ERROR = 'Хэштеги не должны повторяться';
const HASHTAG_ERROR = 'Хэштэг должен начинаться с # и содержать не больше 20 символов';

const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = uploadForm.querySelector('.text__hashtags');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
});

let hashtagMessage = '';
const message = () => hashtagMessage;

const validateHashtag = () => {
  if(!textHashtags.value) {
    return true;
  }
  const hashtags = textHashtags.value.trim().toLowerCase().split(' ');
  if (hashtags.length > 5){
    hashtagMessage = HASHTAG_COUNTER_ERROR;
    return false;
  }
  if (hashtags.length !== new Set(hashtags).size){
    hashtagMessage = HASHTAG_UNIG_ERROR;
    return false;
  }
  for (let i = 0; i < hashtags.length; i++){
    if (!hashtags[i].match(HASHTAG_REGEX)){
      hashtagMessage = HASHTAG_ERROR;
      return false;
    }
  }
  return true;
};

const addValidator = () => pristine.addValidator(textHashtags, validateHashtag, message);
const resetPristine = () => pristine.reset();
const validatePristine = () => pristine.validate();

export {addValidator, resetPristine, validatePristine};
