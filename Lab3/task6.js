
//task 6
let rows = parseInt(prompt("Enter number of rows : " , "5"));
let pattern = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    pattern += "\n";
}
console.log(pattern);