"use strict"

function discounts(){
    let x = +prompt("Enter how much money you paid!")
    let y    
    if (x > 200 && x < 300){y = 3}
    else if (x > 300 && x < 500){y = 5}
    else if (x > 500){y = 7}
    else y = 0;
    let z = x - ((x / 100) * y);
    return console.log(z) 
}

discounts()