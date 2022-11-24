const anchors = document.querySelectorAll('a');

// /. variables

anchors.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        //
        const value = this.getAttribute('href').replace(/[^a-zA-Z]/g, '');
        const targetSection = document.getElementById(value);
        targetSection.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
});

// /. events
