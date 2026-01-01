function valDisplay( obj , str) {
    if(str in obj){
        if(str == "nm"){
            console.log(obj[str] + " is my name");
        }
        if(str == "age"){
            console.log(obj[str] + " years old");
        }
    }
}

let obj={
    nm:"ali",
    age:10
}

valDisplay(obj,"nm");
valDisplay(obj,"age");