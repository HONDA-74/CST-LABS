let answer = document.getElementById("Answer");

function EnterNumber(value) {
  answer.value += value;
}

function EnterOperator(op) {
  answer.value += op;
}

function EnterClear() {
  answer.value = answer.value.slice(0, -1);
  //   answer.value = "";
}

function EnterEqual() {
  let expression = answer.value; // 1+2*3-4/2
  let parts = expression.split(/([\+\-\*\/])/); // ["1", "+", "2", "*", "3", "-", "4", "/", "2"]

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "*" || parts[i] === "/") {
      let a = parseFloat(parts[i - 1]);
      let b = parseFloat(parts[i + 1]);
      let res = parts[i] === "*" ? a * b : a / b;

      parts.splice(i - 1, 3, res.toString());
      i--;
    }
  }

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "+" || parts[i] === "-") {
      let a = parseFloat(parts[i - 1]);
      let b = parseFloat(parts[i + 1]);
      let res = parts[i] === "+" ? a + b : a - b;

      parts.splice(i - 1, 3, res.toString());
      i--;
    }
  }

  answer.value = parts[parts.length - 1];
}
