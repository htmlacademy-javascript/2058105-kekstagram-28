const FILE_TYPES = ['jpg', 'jpeg', 'png', 'gif', 'heic', 'webp'];
const uploadFile = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');

const getUploadFile = () => {
  uploadFile.addEventListener('change', () => {
    const file = uploadFile.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((ending) => fileName.endsWith(ending));

    if (matches) {
      preview.src = URL.createObjectURL(file);
    }
  });
};

export{getUploadFile};
