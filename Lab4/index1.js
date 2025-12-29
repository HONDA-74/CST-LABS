//task 1
let str = prompt("Enter a string:");
let charToCount = prompt("Enter a character to count:");
let caseSensitive = confirm("Should the count be case sensitive?");
let count = 0;
if (!caseSensitive) {
    str = str.toLowerCase();
    charToCount = charToCount.toLowerCase();
}
for (let char of str) {
    if (char === charToCount) {
        count++;
    }
}
alert("The character " + charToCount + " appears " + count + " times in the string.");