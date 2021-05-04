"use strict"

function number(){       
    let btnResult = document.querySelector(".wiev_time__style") 
    let result = document.querySelector(".time__style")    
    let btnchanHours = document.querySelector(".wiev_hours_ghanges__style")
    let btnchanMinutes = document.querySelector(".wiev_minutes_ghanges__style")
    let btnchanSeconds = document.querySelector(".wiev_seconds_ghanges__style")
    let resultchan = document.querySelector(".changes_result__style")

    function newTime(){
        return {
            hours: document.querySelector(".number_one__style").value,
            minutes: document.querySelector(".number_two__style").value,
            seconds: document.querySelector(".number_three__style").value 
        }
    }

    btnResult.addEventListener("click", function (){
        let time = newTime();
        if (time.hours == "" || time.hours == 0) {time.hours = "00";};
        if (time.minutes == "" || time.minutes == 0) {time.minutes = "00";};
        if (time.seconds == "" || time.seconds == 0) {time.seconds = "00";};       
        if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {return (result.innerHTML = "Please enter your positive numbers!!!");};
        if (time.seconds > 59) {time.minutes = +time.minutes + Math.floor(time.seconds / 60); time.seconds = time.seconds % 60;};
        if (time.minutes > 59) {time.hours = +time.hours + Math.floor(time.minutes / 60); time.minutes = time.minutes % 60;};
        if (time.hours < 10) {time.hours = "0" + time.hours;};
        if (time.minutes < 10) {time.minutes = "0" + time.minutes;};
        if (time.seconds < 10) {time.seconds = "0" + time.seconds;};
        return (result.innerHTML = `Your time is - ${time.hours}:${time.minutes}:${time.seconds}`);
    })

    btnchanHours.addEventListener("click", function (){
        let changes = document.querySelector(".number_four__style").value;
        let time = newTime();
        time.hours = +time.hours + +changes;        
        if (time.hours == "" || time.hours == 0) {time.hours = "00";};
        if (time.minutes == "" || time.minutes == 0) {time.minutes = "00";};
        if (time.seconds == "" || time.seconds == 0) {time.seconds = "00";};       
        if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {return (result.innerHTML = "Please enter your positive numbers!!!");};
        if (time.seconds > 59) {time.minutes = +time.minutes + Math.floor(time.seconds / 60); time.seconds = time.seconds % 60;};
        if (time.minutes > 59) {time.hours = +time.hours + Math.floor(time.minutes / 60); time.minutes = time.minutes % 60;};
        if (time.hours < 10) {time.hours = "0" + time.hours;};
        if (time.minutes < 10) {time.minutes = "0" + time.minutes;};
        if (time.seconds < 10) {time.seconds = "0" + time.seconds;};             
        return (resultchan.innerHTML = `Your time is - ${time.hours}:${time.minutes}:${time.seconds}`);
    })
    
    btnchanMinutes.addEventListener("click", function (){
        let changes = document.querySelector(".number_four__style").value;
        let time = newTime();
        time.minutes = +time.minutes + +changes;        
        if (time.hours == "" || time.hours == 0) {time.hours = "00";};
        if (time.minutes == "" || time.minutes == 0) {time.minutes = "00";};
        if (time.seconds == "" || time.seconds == 0) {time.seconds = "00";};       
        if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {return (result.innerHTML = "Please enter your positive numbers!!!");};
        if (time.seconds > 59) {time.minutes = +time.minutes + Math.floor(time.seconds / 60); time.seconds = time.seconds % 60;};
        if (time.minutes > 59) {time.hours = +time.hours + Math.floor(time.minutes / 60); time.minutes = time.minutes % 60;};
        if (time.hours < 10) {time.hours = "0" + time.hours;};
        if (time.minutes < 10) {time.minutes = "0" + time.minutes;};
        if (time.seconds < 10) {time.seconds = "0" + time.seconds;};             
        return (resultchan.innerHTML = `Your time is - ${time.hours}:${time.minutes}:${time.seconds}`);
    })

    btnchanSeconds.addEventListener("click", function (){
        let changes = document.querySelector(".number_four__style").value;
        let time = newTime();
        time.seconds = +time.seconds + +changes;        
        if (time.hours == "" || time.hours == 0) {time.hours = "00";};
        if (time.minutes == "" || time.minutes == 0) {time.minutes = "00";};
        if (time.seconds == "" || time.seconds == 0) {time.seconds = "00";};       
        if (time.hours < 0 || time.minutes < 0 || time.seconds < 0) {return (result.innerHTML = "Please enter your positive numbers!!!");};
        if (time.seconds > 59) {time.minutes = +time.minutes + Math.floor(time.seconds / 60); time.seconds = time.seconds % 60;};
        if (time.minutes > 59) {time.hours = +time.hours + Math.floor(time.minutes / 60); time.minutes = time.minutes % 60;};
        if (time.hours < 10) {time.hours = "0" + time.hours;};
        if (time.minutes < 10) {time.minutes = "0" + time.minutes;};
        if (time.seconds < 10) {time.seconds = "0" + time.seconds;};             
        return (resultchan.innerHTML = `Your time is - ${time.hours}:${time.minutes}:${time.seconds}`);
    })

}


number()