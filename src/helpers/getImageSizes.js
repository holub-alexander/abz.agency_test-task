const getImageSizes = (file, cb) => {
  const img = new Image();
  const sizes = {
    width: 0,
    height: 0,
  };

  img.addEventListener('load', function imageLoad() {
    sizes.width = img.width;
    sizes.height = img.height;

    cb(file, sizes);
    window.removeEventListener('load', imageLoad);
  });
  img.src = window.URL.createObjectURL(file);

  return sizes;
};

export default getImageSizes;
