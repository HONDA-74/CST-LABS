let win;
let timerID;

let x = 0;
let y = 0;

let dx = 10;
let dy = 10;

function openWin1() {
  win = window.open("child.html", "child", "width=100,height=100");

  timerID = setInterval(() => {
    x += dx;
    y += dy;

    if (x + win.outerWidth >= screen.availWidth) {
      dx = -dx;
    }

    if (x <= 0) {
      x = 0;
      dx = -dx;
    }

    if (y + win.outerHeight >= screen.availHeight) {
      dy = -dy;
    }

    if (y <= 0) {
      y = 0;
      dy = -dy;
    }

    win.moveTo(x, y);
    win.resizeTo(100, 100);
  }, 50);
}

//==========================================================

function openWin2() {
  if (!win) {
    win = window.open("child.html", "child", "width=100,height=100");
  }
  timerID = setTimeout(openWithSetTime, 50);
}

function openWithSetTime() {
  x += dx;
  y += dy;

  if (x + win.outerWidth >= screen.availWidth) {
    dx = -dx;
  }

  if (x <= 0) {
    x = 0;
    dx = -dx;
  }

  if (y + win.outerHeight >= screen.availHeight) {
    dy = -dy;
  }

  if (y <= 0) {
    y = 0;
    dy = -dy;
  }

  win.moveTo(x, y);
  win.resizeTo(100, 100);
  win.focus();


  openWin2()
}

//==========================================================

function stopWinInterval() {
  clearInterval(timerID);
  win.close();
}

function stopWinTimeout() {
  clearTimeout(timerID);
  win.close();
}

//==========================================================

function openScroll1() {
  win = window.open("scroll.html", "child", "width=500,height=300");
  win.focus();

  setInterval(() => {
    win.scrollBy(0, 1);
    win.focus();
  }, 10);
}

function openScroll2(){
    win? win  : win = window.open("scroll.html", "child", "width=500,height=300");
    win.focus();
    win.scrollBy(0, 1);
    setTimeout(() => {
        openScroll2();
    }, 10);
}