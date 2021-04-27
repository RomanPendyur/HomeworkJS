"use strict"

function number(){
    let x = document.querySelector(".result__style");
    let y = document.querySelector(".wiev_result__style");

y.addEventListener("click", function () {
  let sec = document.querySelector(".number__style").value;
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) - hours * 60;
  const seconds = sec % 60;  
  return ((x.innerHTML = `Your result is - ${hours}:${minutes}:${seconds} !`));
});
}

number();