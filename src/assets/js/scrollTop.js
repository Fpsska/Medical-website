const buttonTop = document.querySelector('.button-top');

// /. variables

buttonTop.addEventListener('click', () => {
    const offsetTop = window.scrollY;
    if (offsetTop > 0) {
        document.body.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
});

// /. events
