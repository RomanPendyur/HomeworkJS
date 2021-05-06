"use strict"

function number(){
    let window = document.querySelector(".modal_window__style");
    let wievResultBtn = document.querySelector(".wiev_result__style");
    let hideResultBtn = document.querySelector(".hide_window__style");
    window.style.transform = "translateY(-500px)";
    window.style.backgroundColor = "grey";
    window.style.textAlign = "center";
    window.style.padding = "5px";

    wievResultBtn.addEventListener("click", function () {
        window.style.transform = "translateY(35px)";
    });
    hideResultBtn.addEventListener("click", function () {
        window.style.transform = "translateY(-500px)";
    });
}

number()