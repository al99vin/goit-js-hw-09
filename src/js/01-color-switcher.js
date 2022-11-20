const form = document.querySelector('.form')
const body = document.querySelector('.body')
const startB = document.querySelector('[data-start]')
const stopB = document.querySelector('[data-stop]')

stopB.disabled = true;

startB.addEventListener('click', event => {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        }, 1000);
    stopB.disabled = false;
    startB.disabled = true;
});
stopB.addEventListener('click', event => {
    clearInterval(timerId);
    startB.disabled = false;
    stopB.disabled = true;
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

