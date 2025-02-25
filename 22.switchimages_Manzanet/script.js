const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg'
];

let currentIndex = 0;
const imageContainer = document.getElementById('image-container');

document.body.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
});
// JavaScript Document