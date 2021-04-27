"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");

y.addEventListener("click", function () {
  let a = document.querySelector(".first_number__style").value;
  let b = document.querySelector(".second_number__style").value;
  if (a < b) {
    return (x.innerHTML = -1);
  }
  if (a > b) {
    return (x.innerHTML = 1);
  } else {
    return (x.innerHTML = 0);
  }
});
} 

number()

