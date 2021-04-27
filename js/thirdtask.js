"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style"); 
    y.addEventListener("click", function () {
        let a = document.querySelector(".number_one__style").value;
        let b = document.querySelector(".number_two__style").value;
        let c = document.querySelector(".number_three__style").value;
        if (a < 0 || b < 0 || c < 0) {
        return ((x.innerHTML = `Вводите только положительные числа`));
        } else {return (x.innerHTML = a + b + c);}
    });  
}

number()