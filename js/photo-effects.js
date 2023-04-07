const PHOTO_EFFECTS = {
  chrome: {
    name: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    name: 'sepia',
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    name: 'invert',
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    name: 'blur',
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    name: 'brightness',
    min: 1,
    max: 3,
    step: 0.1
  }
};

const UNIT = {
  invert: '%',
  blur: 'px'
};

const image = document.querySelector('.img-upload__preview img');
const effectLevel = document.querySelector('.effect-level__value');
const slider = document.querySelector('.img-upload__effect-level');

const createSlider = () => {
  noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1,
    connect: 'lower'
  });
};

const resetEffect = () => {
  image.style.filter = null;
  slider.classList.add('hidden');
};

const addEffect = (evt) => {
  if(evt.target.value === 'none') {
    resetEffect();
    return;
  }

  slider.classList.remove('hidden');

  const {name, min, max, step} = PHOTO_EFFECTS[evt.target.value];
  const unit = UNIT[name] ? UNIT[name] : '';

  slider.noUiSlider.updateOptions({
    range: {
      min,
      max
    },
    start: max,
    step,
    connect: 'lower'
  });
  slider.noUiSlider.on('update', () => {
    effectLevel.value = slider.noUiSlider.get();
    image.style.filter = `${name}(${effectLevel.value}${unit})`;
  });
};

export{addEffect, resetEffect, createSlider};
