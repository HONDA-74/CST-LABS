//task 5
let firstNum = parseFloat(prompt("Enter first number : " , "1"));
let secondNum = parseFloat(prompt("Enter second number : " , "1"));
let Multiples3 = "Multiples of 3 : ";
let Multiples5 = "Multiples of 5 : ";
let totalSum = 0;
for (let i = firstNum; i <= secondNum; i++) {
    if (i % 3 === 0) {
        Multiples3 += i + " , ";
        totalSum += i;
    }

    if (i % 5 === 0) {
        Multiples5 += i + " , ";
        totalSum += i;
    }

}

console.log(Multiples3);
console.log(Multiples5);
console.log("Total sum : " + totalSum);
