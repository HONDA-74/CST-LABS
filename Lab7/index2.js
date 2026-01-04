let submit = function (e) {
  let result = confirm("Are you sure you want to submit the form?");

  if (result) return true;
  //else return false;
  else e.preventDefault();
};

document.getElementById("form").onsubmit = submit;

//===================================
// let inputed = false;

// let custFunc = function() {
//   console.log("Custom event triggered after 3 seconds");
// }

// let custEvent = new Event('custEvent');

// let ele1 = document.getElementById("fname")
// let ele2 = document.getElementById("lname")

// ele1.addEventListener('custEvent', custFunc)
// ele2.addEventListener('custEvent', custFunc)

// ele1.oninput = function() {
//     inputed = true;
// }

// ele2.oninput = function() {
//     inputed = true;
// }

// if(!inputed) {
//   setTimeout(function() {
//     ele1.dispatchEvent(custEvent);
//     ele2.dispatchEvent(custEvent);
//   }, 3000);
// }

//===================================

// document.onkeydown = function(event) {
//   if(event.ctrlKey === true && event.key === "a") {
//     console.log("ctrl down");
//   }
// }

// document.onkeypress = function(event) {
//     console.log("pressed " +event.key);
// }

// document.onkeydown = function(event) {
//     document.getElementById("h1").innerText += " " + event.key;
// }

// document.addEventListener("keydown", function(event) {
//     if(event.ctrlKey === true || event.shiftKey === true || event.altKey === true) {
//         event.preventDefault();
//         console.log(event.key);
//     }
// })
