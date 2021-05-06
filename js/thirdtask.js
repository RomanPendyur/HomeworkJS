"use strict"

function number(){
    let button = document.querySelector(".change_sigmal__style");
    let colors = document.querySelectorAll(".signal__style");
    let redSignal = document.querySelectorAll(".red_signal__style");
    let yellowSignal = document.querySelectorAll(".yellow_signal__style");
    let greenSignal = document.querySelectorAll(".green_signal__style");
    let stage = 0;
    

button.addEventListener("click", function switchColor() {
  switch (stage % 4) {
    case 0:
      colors[0].style.opacity = "1";
      colors[1].style.opacity = "0.1";
      colors[2].style.opacity = "0.1";
      break;
    case 1:
      colors[0].style.opacity = "1";
      colors[1].style.opacity = "1";
      colors[2].style.opacity = "0.1";
      break;
    case 2:
      colors[0].style.opacity = "0.1";
      colors[1].style.opacity = "0.1";
      colors[2].style.opacity = "1";
      break;
    case 3:
      colors[0].style.opacity = "0.1";
      colors[1].style.opacity = "1";
      colors[2].style.opacity = "0.1";
      break;
  }
  stage++;
});
}

number()