"use strict"

function ageCheck (){
    let x = +prompt("Enter your age please!");
    if (x < 0){console.log("Enter please positive number")}
    else if (x < 12){console.log("You are child, coll your mom!")}
    else if (x < 18){console.log("You are big boy or big girl, but you teenager!")}
    else if (x < 60){console.log("You are adult, are you want beer?")}
    else {console.log("You are an old person, are you want whiskey?")}
    return {x}
} 

ageCheck ()