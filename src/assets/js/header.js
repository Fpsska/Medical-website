const header = document.querySelector('.header');

// /. variables

window.addEventListener('scroll', () => {
    const { height } = header.getBoundingClientRect();
    if (window.scrollY >= parseInt(height) && height > 0) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// /. events
