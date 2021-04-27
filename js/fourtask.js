"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");
    let a = document.querySelector(".number_one__style");
    let b = document.querySelector(".number_two__style");

    function area(x, y) {
        if (x < 0 || y < 0) {
            return "Invalid data entered. Enter positive numbers.";
        }
        if (x == 0) {             
            return `${y * y} см	&sup2;`;
        }
        if (y == 0) {            
            return `${x * x} см	&sup2;`;
        } else {
           return `${x * y} см	&sup2;`;
        }
    }
    y.addEventListener("click", function () {
    x.innerHTML = area(a.value, b.value);    
    });
}

number()
