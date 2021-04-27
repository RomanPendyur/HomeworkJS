"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");    
    y.addEventListener("click", function () {
      let z = document.querySelector(".number__style").value;
      let a = z - 1;
      let b = z;
      for (let i = 2; z > 1; ) {
        if (!(z % i)) {
          a -= i;
          z = z / i;
        } else i++;
      }
      if (!a)(x.innerHTML = "Number " + b + " is perfect!");
      else (x.innerHTML = "Number " + b + " is not perfect!");
    });
} 

number()
