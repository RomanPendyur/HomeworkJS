"use strict"

function dayOfTheWeek(){
    let x = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let y = 0;
    while (confirm(`${x[y]}. Want to know which day is next?`)) {
    y = (y + 1) % x.length;}
}

console.log(dayOfTheWeek());