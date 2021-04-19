"use strict"

function number(){
    let x = prompt("Enter your number!");
    x = x.split("");
    let y = +prompt("Enter how many digits you want to shift the digits!");
    for (let i = 0; i < y; i++){
        x.push(x.shift())
    }return x.join("")    
}

console.log(number());