const timerSpan = document.querySelector('.timer__count');

const startingMinutes = 30;
let time = startingMinutes * 60;

// /. variables

function updateCountdownTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timerSpan.innerHTML = `${minutes}:${seconds}`;
    time--;
}

setInterval(updateCountdownTimer, 1000);
