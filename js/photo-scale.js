const SCALE_STEP = 25;
const SCALE_MIN = '25%';
const SCALE_MAX = '100%';
const PERCENT_DIVIDER = 100;

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const picturePreview = document.querySelector('.img-upload__preview img');

const scalePicture = (value) => {
  picturePreview.style.transform = `scale(${+value.replace('%', '') / PERCENT_DIVIDER})`;
};

const onScaleSmallerClick = () => {
  if(scaleInput.value !== SCALE_MIN) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') - SCALE_STEP}%`;
    scalePicture(scaleInput.value);
  }
};

const onScaleBiggerClick = () => {
  if(scaleInput.value !== SCALE_MAX) {
    scaleInput.value = `${+scaleInput.value.replace('%', '') + SCALE_STEP}%`;
    scalePicture(scaleInput.value);
  }
};

const addScale = () => {
  scaleSmaller.addEventListener('click', onScaleSmallerClick);
  scaleBigger.addEventListener('click', onScaleBiggerClick);
};

const resetScale = () => scalePicture(scaleInput.value);

export{addScale, resetScale};
