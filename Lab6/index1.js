let win;
let text = "hello from typing window.........";
let i = 0;
let timerId;

function wait5Sec(fn) {
  setTimeout(fn, 5000);
}

function openTypeWin() {
  let win = window.open("messageWin.html", "child", "width=400,height=400");

  win.onload = function () {
    timerId = setInterval(function () {
      win.document.getElementsByTagName("p")[0].innerHTML += text[i++];
      if (i == text.length) {
        clearInterval(timerId);
        wait5Sec(function () {
          win.close();
        });
      }
    }, 300);
  };
}

let button = document.getElementById("type");

button.onclick = openTypeWin;
