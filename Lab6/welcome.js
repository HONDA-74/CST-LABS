let user = {};

function getUserInfo() {
  let query = window.location.search;
  let text = query.replace("?", "");
  let arr = text.split("&");
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i].split("=");
    user[item[0]] = item[1];
  }
}

getUserInfo();

function display() {
  document.getElementById("h").innerHTML = "Welcome " + user.name;
  document.getElementById("p").innerHTML =
    "Your address is " +
    user.address +
    "<br>" +
    "Your gender is " +
    user.gender +
    "<br>" +
    "You email is " +
    user.email +
    "<br>" +
    "Your mobile number is " +
    user.mobile;

  let browser = navigator.userAgent;

  if (!browser.includes("Chrome")) {
    let alert = document.getElementById("browser");
    alert.innerHTML = "For better experience, please use Google Chrome.";
    alert.style.color = "red";
  }
}

window.onload = function () {
  display();
};
