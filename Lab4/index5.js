let radius = parseFloat(prompt("Enter circle radius:"));
let area = Math.PI * Math.pow((radius/2), 2);
alert("Circle Area = " + Math.round(area));


let num = parseFloat(prompt("Enter a number to calculate square root:"));
alert("Square Root = " + Math.sqrt(num));


let angle = parseFloat(prompt("Enter angle in degrees:"));
let radians = angle * (Math.PI / 180);
alert("Cosine value = " + Math.cos(radians).toFixed(2));