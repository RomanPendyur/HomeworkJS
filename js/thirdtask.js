"use strict"

function similarumbers(){
    let x = +prompt("Please enter a three-digit number");
    let x1 = parseInt(x / 100);
    let x2 = parseInt(x / 10) % 10;
    let x3 = x % 10;
    if (x1===x2 || x2===x3242 || x1===x3){console.log("We found matches!")}    
    else {console.log("We didnt found matches!")}
}

similarumbers()