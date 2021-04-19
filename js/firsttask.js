"use strict"

function number(){
    let x = +prompt("Enter first number");
    let y = +prompt("Enter last number");
    let result = 0; 
    while(x <= y){       
        result+=x;  
        x++;
    }
    return result
} 

console.log(number())