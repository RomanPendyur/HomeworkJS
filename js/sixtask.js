"use strict"

function moneyConverter(){
    let x = +prompt("Enter how much you need to transfer USD!")
    let y = prompt("What currency are you interested in? You can choose EUR, UAN or AZN")
    if ( y === "EUR") {x = x * 0.85}
    else if ( y === "UAN") {x = x / 0.036}
    else if ( y === "AZN") {x = x / 0.59}
    else {console.log("Please choose from EUR, UAN or AZN")}
    return console.log(x)
}

moneyConverter()