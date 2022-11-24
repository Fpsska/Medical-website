const burgerBtn = document.querySelector('.burger-button');
const burger = document.querySelector('.burger');
const aboutSection = document.querySelector('.about');

// /. variables

burgerBtn.addEventListener('click', function () {
    this.classList.toggle('transformed');
    burger.classList.toggle('visible');
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 475) {
        burgerBtn.classList.remove('transformed');
        burger.classList.remove('visible');
    }
});

document.addEventListener('keydown', e => {
    const isVisible =
        burgerBtn.classList.contains('transformed') &&
        burger.classList.contains('visible');
    if (e.code === 'Escape' && isVisible) {
        burgerBtn.classList.remove('transformed');
        burger.classList.remove('visible');
    }
});

window.addEventListener('scroll', () => {
    const { height } = aboutSection.getBoundingClientRect();
    if (window.scrollY >= parseInt(height)) {
        burgerBtn.classList.add('dark');
        burger.classList.add('dark');
    } else {
        burgerBtn.classList.remove('dark');
        burger.classList.remove('dark');
    }
});

// /. events
