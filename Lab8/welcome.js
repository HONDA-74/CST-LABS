window.onload = function () {
  try {
    let username = getCookie("username");
    let age = getCookie("age");
    let color = getCookie("color");
    let gender = getCookie("gender");

    let visitedKey = `visitedTimes_${username}`;
    let visitedTimes = getCookie(visitedKey);
    visitedTimes = visitedTimes ? Number(visitedTimes) : 0;
    setCookie(visitedKey, String(visitedTimes+1));

    let genderImg =
      gender === "male"
        ? "/Task Resources/cookies/1.jpg"
        : "/Task Resources/cookies/2.jpg";

    document.getElementById(
      "message"
    ).innerHTML = `<img src="${genderImg}" alt="${gender}"> 
      <h1>
        Welcome <span>${username}</span>! 
        You are ${age} years old and visited us ${visitedTimes} times
      </h1>`;
      this.document.getElementsByTagName("span")[0].style.color = color;
  } catch (error) {
    console.log(error.message);
  }
};
