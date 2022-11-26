import placeholder from '../images/image-placeholder.png';

// /. imports

const images = document.querySelectorAll('img');

// /. variables

images.forEach(image => {
    image.addEventListener('error', () => {
        image.onerror = null;
        image.src = placeholder;
    });
});
