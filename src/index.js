import './index.html';
import './assets/styles/style.css';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

// /. imports

// init Swiper:
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true
});
