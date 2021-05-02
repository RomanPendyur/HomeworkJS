"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");
    let z = document.querySelector(".enter_number__style");

    function factorial(a) {
        if (a == 1) {
        return (x.innerHTML = 1);
        } else {
        return a * factorial(a - 1);
        }
    }

    y.addEventListener("click", function () {    
    x.innerHTML = factorial(z.value);
});

}

number()