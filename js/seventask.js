"use strict"

function number(){
    let x = document.querySelector(".result__style");    
    let y = document.querySelector(".wiev_result__style");
    let hour = document.querySelector(".number_one__style");
    let min = document.querySelector(".number_two__style");
    let sec = document.querySelector(".number_tree__style");

function time(hh = 0, mm = 0, ss = 0) {
    if (hh < 0 || hh > 59 || hh == "") {
        hh = "00";
    }
    if (hh < 10 && hh !== 0) {
        hh = "0" + hh;
    }
    if (mm < 0 || mm > 59 || mm == "") {
        mm = "00";
    }
    if (mm < 10 && mm !== 0) {
        mm = "0" + mm;
    }
    if (ss < 0 || ss > 59 || ss == "") {
       ss = "00";
    }
    if (ss < 10 && ss !== 0 ) {
        ss = "0" + ss;
    }
    return ((x.innerHTML = `Your time is - ${hh}:${mm}:${ss}`));
}
y.addEventListener("click", () => {
  time(hour.value, min.value, sec.value);
}); 
}

number()