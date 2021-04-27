"use strict"

function number(){    
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");    
    function perfectNumber(z) {
      let c = 0;    
      for (let i = 1; i < z; i++) {
        if (z % i == 0) {
          c += i;
        }
      }return c === z;
    }    
    y.addEventListener("click", function () {
      let a = document.querySelector(".number_one__style").value;
      let b = document.querySelector(".number_two__style").value;
      let result = [];    
      for (let i = a; i <= b; i++) {
        if (perfectNumber(i)) {
          result.push(i);
        }        
      }return (
        (x.innerHTML = `Result is: ${result}`)
      );
    });
}

number()