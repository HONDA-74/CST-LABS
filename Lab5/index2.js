let obj = {
    street : "abc st",
    buildingNum : 15,
    city : "xyz",
}



function showAddr(obj) {
    let fullAddr = "";
    let wait =""
    let now = new Date();
    for(let key in obj){
        if(key == "buildingNum"){
            fullAddr += obj[key] + ", " + wait;
        }else if (fullAddr) {
            fullAddr += obj[key] + ", ";
        }
        wait += obj[key] + ", "; 
    }
    fullAddr += now.toLocaleDateString();
    return fullAddr;
}

console.log(showAddr(obj));
