"use strict"

function findYear(){
    let x = +prompt("Enter year please!")
    if (x % 400 === 0 || x % 4 === 0){console.log("This year is leap year!")}
    else {console.log("This year is not leap year!")}
}

findYear()