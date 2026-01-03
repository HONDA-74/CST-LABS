let timerId;
let currentImg = 1;

document.getElementById("next").onclick = next;

document.getElementById("previous").onclick = previous;

document.getElementById("play").onclick = function () {
  timerId = setInterval(play, 2000);
};

document.getElementById("stop").onclick = function () {
  timerId = clearInterval(timerId);
};

function next() {
  if (currentImg < 6) {
    currentImg += 1;
    document.getElementById("image").src = "SlideShow/" + currentImg + ".jpg";
  }
}

function previous() {
  if (currentImg > 1) {
    currentImg -= 1;
    document.getElementById("image").src = "SlideShow/" + currentImg + ".jpg";
  }
}

function play() {
  if (currentImg < 6) {
    currentImg += 1;
    document.getElementById("image").src = "SlideShow/" + currentImg + ".jpg";
  } else {
    currentImg = 1;
    document.getElementById("image").src = "SlideShow/" + currentImg + ".jpg";
    // history.go(0);
  }
}
