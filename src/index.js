import './index.html';
import './assets/styles/style.css';
import './assets/styles/_media.css';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// /. imports

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: 3
        }
    }
});
