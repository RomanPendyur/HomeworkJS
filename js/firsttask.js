"use strict"

let productName = document.querySelector(".first_input__style").value;
let productQuantity = document.querySelector(".second_input__style").value;
let productStatus = document.querySelector(".third_input__style").value;*/
let addProductBtn = document.querySelector(".add_new__style");
let wievListBtn = document.querySelector(".wiev_list__style");
let productlist = document.querySelector(".list__style");

let shoppingList = []


function getProduct(){
  return {
    nameProd: productName, 
    quantity: productQuantity,
    status: productStatus 
  }
}


addProductBtn.addEventListener("click", function () 
{return (productlist.innerHTML = `${shoppingList}`);
});  
