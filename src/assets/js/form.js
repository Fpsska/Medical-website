import IMask from 'imask';

// /. imports

const form = document.querySelector('.order__form');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--phone');

// /. variables

// prohibit entering any characters other than numbers (native)
// phoneInput.addEventListener('input', function (e) {
//     const inputValue = e.target.value.replace(/[^0-9]/gi, '');
//     this.value = inputValue;
// });

// or with usage imask plagin
const mask = IMask(phoneInput, {
    mask: '+{7} (000) 000-00-00',
    lazy: false,
    placeholderChar: '_'
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //

    if (!mask.masked.isComplete) {
        return;
    }

    const formData = {
        userName: nameInput.value,
        userPhoneNum: phoneInput.value, // or + ${phoneInput.value}
        sendingTime: new Date().toLocaleString()
    };
    //
    this.reset();
    nameInput.value = '';
    phoneInput.value = '';
    //
    alert(JSON.stringify(formData));
    console.log(formData);
});

// /. events
