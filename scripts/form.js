let time = 1800;
const timer = document.querySelector('.form-block__timer');

let updateTimer = function () {
   const minutes = Math.floor(time / 60);
   let seconds = time % 60;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   timer.innerHTML = `${minutes}:${seconds}`;
   time--;
};

setInterval(updateTimer, 1000);

