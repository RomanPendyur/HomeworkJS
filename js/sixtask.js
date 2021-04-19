"use strict"

function calculator(){    
    let result = 0;
    function calculating(){
    let x = +prompt("Enter first number!");
    let y = +prompt("Enter second number");
    let z = prompt("Enter the action you want to perform.(For add numbers  +, subtract numbers -, multiply numbers *, and divide numbers /)");
    if (z == "+"){result = x + y};
    if (z == "-"){result = x - y};
    if (z == "*"){result = x * y};
    if (z == "/"){result = x / y};
    console.log(result)
    }
    while (confirm("Your result is " + result + "Do you want to continue working with the calculator?") == true ){calculating()}
}

calculator()