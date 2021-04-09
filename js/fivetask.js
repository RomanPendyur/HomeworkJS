"use strict"

function findPalindrome(){
    let x = prompt("Enter year please!")
    if (x === x.split("").reverse().join()){console.log("This number is palindrome!")}
    else {console.log("This number is not a palindrome!")}
}

findPalindrome()