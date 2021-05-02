"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");  
    y.addEventListener("click", function time() {
    let hoursOne = document.querySelector(".number_one__style").value;
    let minsOne = document.querySelector(".number_two__style").value;
    let secsOne = document.querySelector(".number_tree__style").value;
    let hoursTwo = document.querySelector(".number_four__style").value;
    let minsTwo = document.querySelector(".number_five__style").value;
    let secsTwo = document.querySelector(".number_six__style").value;
    let resultOne = hoursOne * 3600 + minsOne * 60 + secsOne * 1;
    let resultTwo = hoursTwo * 3600 + minsTwo * 60 + secsTwo * 1;
    let result = resultOne - resultTwo;
    if (result < 0) {
      result = result * -1;
    }
    const hours = Math.floor(result / 3600);
    const minutes = Math.floor(result / 60) - hours * 60;
    const seconds = result % 60;
    return ((x.innerHTML = `Your result - ${hours}:${minutes}:${seconds}`));
  });
}

number()