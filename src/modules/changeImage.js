const changeImage = () => {
  const images = document.querySelectorAll('.command__photo');
  images.forEach((img) => {
    const way = img.getAttribute('src');
    const dataWay = img.dataset.img;

    img.addEventListener('mouseenter', () => {img.src = dataWay})
    img.addEventListener('mouseleave', () => {img.src = way})
  });
};

export default changeImage;