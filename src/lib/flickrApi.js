export const createImageUrl = (image, size = "q") => {
  return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_${size}.jpg`;
};
