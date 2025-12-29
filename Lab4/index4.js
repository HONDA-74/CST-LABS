// task 4

let userName, phoneNumber, mobileNumber, email, pickedColor;
let today = new Date().toDateString();

let mobilePattern = /^01[0-2,5][0-9]{8}$/;
let namePattern = /^[A-Za-z\s]+$/;
let phonePattern = /^[0-9]{8}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let colorPattern = /^(red|blue|green)$/;

do {
    userName = prompt("Enter your name:");
    if (!namePattern.test(userName)) {
        alert("Invalid name, please enter letters only.");
    }
} while (!namePattern.test(userName));

do {
    phoneNumber = prompt("Enter your phone number (8 digits):");
    if (!phonePattern.test(phoneNumber)) {
        alert("Invalid phone number.");
    }
} while (!phonePattern.test(phoneNumber));


do {
    mobileNumber = prompt("Enter your mobile number:");
    if (!mobilePattern.test(mobileNumber)) {
        alert("Invalid mobile number.");
    }
} while (!mobilePattern.test(mobileNumber));


do {
    email = prompt("Enter your email address:");
    if (!emailPattern.test(email)) {
        alert("Invalid email address.");
    }
} while (!emailPattern.test(email));


do {
    pickedColor = prompt("Pick a color (red, blue, green):").toLowerCase();
    if (!colorPattern.test(pickedColor)) {
        alert("Invalid color.");
    }
} while (!colorPattern.test(pickedColor));


document.write("<h2 style='color:" + pickedColor + ";'>Hello</h2>");
document.write("<p style='color:" + pickedColor + ";'>Name: " + userName + "</p>");
document.write("<p style='color:" + pickedColor + ";'>Phone number: " + phoneNumber + "</p>");
document.write("<p style='color:" + pickedColor + ";'>Mobile number: " + mobileNumber + "</p>");
document.write("<p style='color:" + pickedColor + ";'>Email address: " + email + "</p>");
document.write("<p style='color:" + pickedColor + ";'>Color: " + pickedColor + "</p>");
document.write("<p style='color:" + pickedColor + ";'>Today's date: " + today + "</p>");
