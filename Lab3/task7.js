//task 7
let firstNum = parseFloat(prompt("Enter first number : " , "1"));
let secondNum = parseFloat(prompt("Enter second number : " , "1"));
let comdition = prompt("Enter condition (even/odd/no) : " , "even");

if (isFinite(firstNum) == false || isFinite(secondNum) == false) {
    alert("Invalid input, press Enter to retry");
    location.reload();
}

if (comdition != "even" && comdition != "odd" && comdition != "no") {
    alert("Invalid input, press Enter to retry");
    location.reload();
}

let resultArr = [];
let sum = 0;
for (let i = firstNum; i <= secondNum; i++) {
    if (comdition === "even" && i % 2 === 0) {
        resultArr.push(i);
        sum += i;
    } else if (comdition === "odd" && i % 2 !== 0) {
        resultArr.push(i);
        sum += i;
    } else if (comdition === "no") {
        resultArr.push(i);
        sum += i;
    }
}

console.log("Resulting Numbers : " + resultArr);
console.log("Sum : " + sum);