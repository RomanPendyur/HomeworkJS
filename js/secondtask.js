"use strict"

function numberSimbols (){
    let x = +prompt("Enter first number");
    let y = +prompt("Enter second number");
    if (x == 0)
        return y;
    while (y != 0) {
        if (x > y)
            x = x - y;
        else
            y = y - x;
    }
    return x;
}

console.log(numberSimbols ())