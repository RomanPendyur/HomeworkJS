"use strict"

function number(){
    let w = document.querySelector(".wiev_information__style");
    let y = document.querySelector(".information__style");
    let z = document.querySelector(".wiev_result__style");    
    let x = document.querySelector(".result__style");
    let car = {}

    function newCar(){      
      return {  
          brand: document.querySelector(".first_number__style").value,
          model: document.querySelector(".second_number__style").value,
          year: document.querySelector(".third_number__style").value,
          speed: document.querySelector(".fourth_number__style").value}      
    }
    w.addEventListener("click", function wievCar() {
      car = newCar()
      if (car.brand == "" || car.model == "" || car.year == "" || car.speed == "" ) {return y.innerHTML = "Enter information about your car please!!"}
      let result = "";
      for (let key in car) {result += key + " - " + car[key] + "<br>";}
      y.innerHTML = result;
    })

    z.addEventListener("click", function wievTime(){
      car = newCar();
      let g = document.querySelector(".sixth_number__style").value
      let time = g / car.speed;
      let rest = time / 5;
      let fullTime = (time + rest) * 3600;
      let hours = Math.floor(fullTime / 3600);
      let minutes = Math.floor(fullTime / 60) - hours * 60;
      let seconds = Math.floor(fullTime % 60);
      if (hours < 10){hours = "0" + hours}
      if (minutes < 10){minutes = "0" + minutes}
      if (seconds < 10){seconds = "0" + seconds}
      if (car.speed == 0){return x.innerHTML = "Please enter the speed of your car!!!"}
      if (g == 0 || g === "" || car.speed == 0){return x.innerHTML = "Please enter your distance!!!"}
      return x.innerHTML = `The time you need to travel the specified distance ${hours}:${minutes}:${seconds}`;
    })  
} 
number()

