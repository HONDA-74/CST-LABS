let arr = []
let continueArr = true
while(continueArr){
    let element = prompt("Enter the elements of the array(type 'stop' to stop):");
    if(element == "stop"){
        continueArr = false
    }
    else{
        arr.push(element)
    }
}

console.log("Original Array: " + arr);

arr.sort((a, b) => a - b);

console.log("Sorted ascending: " + arr);

arr.sort((a, b) => b - a);

console.log("Sorted descending: " + arr);


