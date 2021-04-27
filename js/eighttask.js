"use strict"

function dayOfTheWeek(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");
    
    y.addEventListener("click", function time() {
      let hour = document.querySelector(".number_one__style").value;
      let min = document.querySelector(".number_two__style").value;
      let sec = document.querySelector(".number_tree__style").value;
      return ((x.innerHTML = `Your time - ${hour * 3600 + min * 60 + sec * 1} seconds`));
    });
    
}

console.log(dayOfTheWeek());