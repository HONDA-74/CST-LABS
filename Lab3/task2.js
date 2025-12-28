
//task 2
let number = parseFloat(prompt("Enter a number : " , "1"));
let sum = 0;
while (number > 0) {
    sum += number;
    if (sum >= 100) {
        break;
    }
    number = parseFloat(prompt("Enter a number : " , "1"));
}

console.log("The Sum is : " + sum);