"use strict"

function number(){
    let x = +prompt("Enter number");
    let result = [];    
    for (let i = 1; i <= x; i++) {      
        if (x % i == 0) 
        {
            result.push(i);            
        }
    }
    return result
}

console.log(number())