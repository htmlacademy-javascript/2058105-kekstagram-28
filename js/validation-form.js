const uploadForm = document.querySelector('.img-upload__form');
const textHashtags = uploadForm.querySelector('.text__hashtags');
const hashtagRegex = /^#[a-zа-яё0-9]{1,19}$/i;

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
  const hashtags = textHashtags.value.trim().split(' ');
  if (hashtags.length > 5){
    hashtagMessage = 'Не больше 5ти хештегов';
    return false;
  }
  if (hashtags.length !== new Set(hashtags).size){
    hashtagMessage = 'Хэштеги не должны повторяться';
    return false;
  }
  for (let i = 0; i < hashtags.length; i++){
    if (!hashtags[i].match(hashtagRegex)){
      hashtagMessage = 'Хэштэг должен начинаться с # и содержать не больше 20 символов';
      return false;
    }
  }
  return true;
};

const addValidator = () => pristine.addValidator(textHashtags, validateHashtag, message);
const resetPristine = () => pristine.reset();
const validatePristine = () => pristine.validate();

export {addValidator, resetPristine, validatePristine};
