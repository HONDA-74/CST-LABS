//task 4
let x = parseFloat(prompt("Enter first number : " , "1"));
let y = parseFloat(prompt("Enter second number : " , "1"));
let z = parseFloat(prompt("Enter third number : " , "1"));

if (x%y === 0 && x%z === 0) {
    console.log(x + " is divisible by both " + y + " and " + z);
} else if (x%y === 0) {
    console.log(x + " is divisible by " + y);
} else if (x%z === 0) {
    console.log(x + " is divisible by " + z);
} else {
    console.log(x + " is not divisible by " + y + " or " + z);
}