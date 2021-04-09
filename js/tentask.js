"use strict"

function choiseDate(){
    let x = +prompt("Enter a day num");
    let y = +prompt("Enter a month");
    let z = +prompt("Enter a year");    
    let a = x+1;
    let b = y;
    let c = z;
    if (x==31){a=1, b=b+1}
    if (y==12){b=1, c=c+1}
    return console.log( a, b, c)
    
}

choiseDate()