let currentMarble = 1;
let previousMarble = 5;
let timerId;

timer = 1000

start();

function start() {
    timerId = setInterval(loading, timer);
}

document.getElementById("marbels").onmouseleave = start;
document.getElementById("marbels").onmouseenter = function () {
  clearInterval(timerId);
  timer-=100
};


function loading() {
//   console.log(timer);
  
  document.getElementById(previousMarble).src = "marbels/marble1.jpg";
  previousMarble = currentMarble;
  document.getElementById(currentMarble).src = "marbels/marble3.jpg";
  currentMarble++
  if (currentMarble > 5) {
    currentMarble = 1;
  }
}


