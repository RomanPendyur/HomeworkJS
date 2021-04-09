"use strict"

function numberSimbols (){
    let result = 0;
    let x = prompt("What new form elements have been introduced in HTML 5?\n A - Number, Email, Color. \n B - div, class, section. \n C - height, top, position");
    let y = prompt("What is SVG?\n A - it is element for pictuer. \n B - scalable vector graphics. \n C - New element in HTML.");
    let z = prompt("What are CSS selectors?\n A - Tegs HTML. \n B - Hellpers developer. \n C - Selectors help you select the element you want to style");
    if (x == "A"){result++}
    if (x == "a"){result++}
    if (y == "B"){result++}
    if (y == "b"){result++}
    if (z == "C"){result++}
    if (z == "c"){result++}
    return console.log("Your test result is " + result);    
}

numberSimbols ();