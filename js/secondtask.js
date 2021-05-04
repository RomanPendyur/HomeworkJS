"use strict"

function number(){    
    let resultBtnAdd = document.querySelector(".wiev_first_result__style");
    let resultBtnSub = document.querySelector(".wiev_second_result__style");
    let resultBtnMul = document.querySelector(".wiev_third_result__style");
    let resultBtnDiv = document.querySelector(".wiev_fourth_result__style");    
    let result = document.querySelector(".result__style");
    let resultBtnRed = document.querySelector(".wiev_five_result__style");
    let resultRed = document.querySelector(".second_result__style");
 
 
    /* Я спочатку зробив без цієї функції, вийшло набагато меньше коду, але потім підгледів у Андрія, він робить через функцію яка створює об'єкт,
    та в завданні пише що потрібен об'єкт, але мені здається що можна зробити без цієї зайвої функції.*/
    function fraction(x, y) {
        return { numerator : x, denominator: y };
    }

    resultBtnAdd.addEventListener ("click", function(){
        let firstNumer = document.querySelector(".first_number__style").value;
        let firstDomin = document.querySelector(".second_number__style").value;
        let seconNumer = document.querySelector(".third_number__style").value;
        let seconDomin = document.querySelector(".fourth_number__style").value;            
        let firstFraction = fraction(firstNumer, firstDomin);
        let secondFraction = fraction(seconNumer, seconDomin);
        if (firstNumer <= 0 || firstDomin <= 0 || seconNumer <= 0 || seconDomin <= 0)
            {return (result.innerHTML = "The numbers entered must be positive!")}
        if (firstNumer > firstDomin || seconNumer > seconDomin)
            {return (result.innerHTML = "The numerator cannot be larger than the denominator!")}
        else {return (result.innerHTML = `Your result is =${
            firstFraction.numerator * secondFraction.denominator + secondFraction.numerator * firstFraction.denominator}/${firstFraction.denominator * secondFraction.denominator}`);}
    })

    resultBtnSub.addEventListener ("click", function(){
        let firstNumer = document.querySelector(".first_number__style").value;
        let firstDomin = document.querySelector(".second_number__style").value;
        let seconNumer = document.querySelector(".third_number__style").value;
        let seconDomin = document.querySelector(".fourth_number__style").value;            
        let firstFraction = fraction(firstNumer, firstDomin);
        let secondFraction = fraction(seconNumer, seconDomin);
        if (firstNumer <= 0 || firstDomin <= 0 || seconNumer <= 0 || seconDomin <= 0)
            {return (result.innerHTML = "The numbers entered must be positive!")}
        if (firstNumer > firstDomin || seconNumer > seconDomin)
            {return (result.innerHTML = "The numerator cannot be larger than the denominator!")}
        else {return (result.innerHTML = `Your result is =${
            firstFraction.numerator * secondFraction.denominator - secondFraction.numerator * firstFraction.denominator}/${firstFraction.denominator * secondFraction.denominator}`);}
    })

    resultBtnMul.addEventListener ("click", function(){
        let firstNumer = document.querySelector(".first_number__style").value;
        let firstDomin = document.querySelector(".second_number__style").value;
        let seconNumer = document.querySelector(".third_number__style").value;
        let seconDomin = document.querySelector(".fourth_number__style").value;            
        let firstFraction = fraction(firstNumer, firstDomin);
        let secondFraction = fraction(seconNumer, seconDomin);
        if (firstNumer <= 0 || firstDomin <= 0 || seconNumer <= 0 || seconDomin <= 0)
            {return (result.innerHTML = "The numbers entered must be positive!")}
        if (firstNumer > firstDomin || seconNumer > seconDomin)
            {return (result.innerHTML = "The numerator cannot be larger than the denominator!")}
        else {return (result.innerHTML = `Your result is =${
            firstFraction.numerator * secondFraction.numerator
          }/${firstFraction.denominator * secondFraction.denominator}`);}
    })

    resultBtnDiv.addEventListener ("click", function(){
        let firstNumer = document.querySelector(".first_number__style").value;
        let firstDomin = document.querySelector(".second_number__style").value;
        let seconNumer = document.querySelector(".third_number__style").value;
        let seconDomin = document.querySelector(".fourth_number__style").value;            
        let firstFraction = fraction(firstNumer, firstDomin);
        let secondFraction = fraction(seconNumer, seconDomin);
        if (firstNumer <= 0 || firstDomin <= 0 || seconNumer <= 0 || seconDomin <= 0)
            {return (result.innerHTML = "The numbers entered must be positive!")}
        if (firstNumer > firstDomin || seconNumer > seconDomin)
            {return (result.innerHTML = "The numerator cannot be larger than the denominator!")}
        else {return (result.innerHTML = `Your result is =${
            firstFraction.numerator * secondFraction.denominator
          }/${firstFraction.denominator * secondFraction.numerator}`);}
    })


    resultBtnRed.addEventListener ("click", function (){
        let thirdNumer = document.querySelector(".five_number__style").value;
        let thirdDomin = document.querySelector(".six_number__style").value;
        let redFraction = fraction(thirdNumer, thirdDomin);
        if ( thirdNumer <= 0 || thirdDomin <= 0)
        {return (resultRed.innerHTML = "The numbers entered must be positive!")}
        if (thirdNumer > thirdDomin)
        {return (resultRed.innerHTML = "The numerator cannot be larger than the denominator!")}
        for (let i = redFraction.numerator; i >= 1; i--){
            if (redFraction.numerator % i == 0 && redFraction.denominator % i == 0){redFraction.numerator = redFraction.numerator / i; redFraction.denominator = redFraction.denominator / i;}
        }
        if (redFraction.numerator == redFraction.denominator){return (resultRed.innerHTML = "Result is 1")}
        else {return (resultRed.innerHTML = `Result is  ${redFraction.numerator}/${redFraction.denominator}`)}
    })
    }

number()