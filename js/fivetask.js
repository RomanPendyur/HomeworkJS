"use strict"

function numberResult(){
    let y = 0;
    let z = 0;
    let c = 0;
    let v = 0;
    let b = 0;   
    let x = prompt("Please enter numbers separated by commas!").split(",");    
    for (let i = 0; i <= x.length; i++){
        if (x[i] > 0){y++}
        if (x[i] < 0){z++}
        if (x[i] == 0){c++}
        if (x[i] % 2 == 0){v++ || b++}
    } return "You entered " + y + " positive numbers. " 
           + " You entered " + z + " negative number. " 
           + " You entered" + c + " zeros. "
           + " You entered " + v + " even number. "
           + " You entered " + b + " odd number. "
} 


console.log(numberResult())
