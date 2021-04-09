"use strict"

function numberSimbols (){
    let x = +prompt("Enter circumference!");
    let y = +prompt("Enter perimeter of a square!");
    if (y / 3.14 > x)
         {console.log("Your circle can be placed in the square you specified");} 
    else {console.log("Sorry but your circle can not be placed in the square you specified");}
}

numberSimbols ();