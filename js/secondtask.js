"use strict"

function numberSimbols (){
    let x = +prompt("Enter your enter a number from 0 to 9!");
    if (x < 0){console.log("Enter please positive number")}
    else if (x == 0){console.log(")")}
    else if (x == 1){console.log("!")}
    else if (x == 2){console.log("\"")}
    else if (x == 3){console.log("#")}
    else if (x == 4){console.log("$")}
    else if (x == 5){console.log("%")}
    else if (x == 6){console.log("^")}
    else if (x == 7){console.log("\&")}
    else if (x == 8){console.log("*")}
    else if (x == 9){console.log("(")}    
    else {console.log("You did not enter a number from 0 to 9!")};
    return {x};
}

numberSimbols ();