//task 2
let str = prompt("Enter a string:");
let caseSensitive = confirm("Should the palindrome check be case sensitive?");
if (!caseSensitive) {
    str = str.toLowerCase();
}

let isPalindrome = true;
for (let i = 0; i < str.length/2; i++) { 
    if (str[i] != str[str.length - 1 - i]) {
        alert("The string is not a palindrome.");
        isPalindrome = false;
        i = str.length;
    }
}
if (isPalindrome) alert("The string is a palindrome.");

//==========================================================

// let reversedStr = str.split('').reverse().join('');
// if (str == reversedStr) {
//     alert("The string is a palindrome.");
// } else {
//     alert("The string is not a palindrome.");
// }
