//task 3
let str=prompt("Enter a string:");
let splitStr=str.split(' ');
let longestWord="";
for(let word of splitStr){
    if(word.length>longestWord.length){
        longestWord=word;
    }
}
alert("The longest word is: " + longestWord);