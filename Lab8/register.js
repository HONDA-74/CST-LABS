document.getElementById("register").addEventListener("click", addUser);

function addUser() {
  try {
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    let color = document.getElementById("color").value;
    let genderInput = document.querySelector('input[name="gender"]:checked');
    if (!genderInput) throw new Error("Please select a gender");
    let gender = genderInput.value;

    setCookie("username", username);
    setCookie("age", age);
    setCookie("color", color);
    setCookie("gender", gender);

    let visitedKey = `visitedTimes_${username}`;
    if (!hasCookie(visitedKey)) {
      setCookie(visitedKey, "1");
    }

    document.location.assign("welcome.html");
  } catch (error) {
    console.error(error.message);
  }
}
