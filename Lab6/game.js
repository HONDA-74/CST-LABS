let frist, second;
let unMatched = [];
let matchs = 0;


let elements = document.querySelectorAll(".cover");


for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    elements[i].src = "memory Game/" + this.getAttribute("data-pair") + ".gif";

    if (unMatched.length > 0) {
      for(let j = 0; j < unMatched.length; j++) {
        unMatched[j].src = "memory Game/Moon.gif";
      }
      unMatched = [];
    }

    if (frist == null) {
      frist = this;
      return
    } else if (second == null) {
      second = this;
    }

    if (frist.getAttribute("data-pair") == second.getAttribute("data-pair")) {
      matchs++;
      document.getElementById("matchs").innerHTML ="Matchs = " + matchs;
      frist = null;
      second = null;
    } else {
        unMatched.push(frist,second);
        frist = null;
        second = null;
    }
  };
}

let button = document.getElementById("restart");

button.onclick = function () {

  for (let i = 0; i < elements.length; i++) {
    elements[i].src = "memory Game/Moon.gif";
    let newPair = elements[i].getAttribute("data-pair")*2%7;
    elements[i].setAttribute("data-pair",newPair);
  }
//   console.log(elements);
  
  frist = null;
  second = null;
  unMatched = [];
  matchs = 0;
  document.getElementById("matchs").innerHTML = "Matchs = " + matchs;
};
