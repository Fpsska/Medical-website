const form = document.querySelector('.order__form');
const nameInput = document.querySelector('.form__input--name');
const phoneInput = document.querySelector('.form__input--phone');

// /. variables

phoneInput.addEventListener('input', function (e) {
    const inputValue = e.target.value.replace(/[^0-9]/gi, '');
    this.value = inputValue;
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //
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
