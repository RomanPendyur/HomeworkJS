"use strict"

/*let productName = document.querySelector(".first_input__style").value;
let productQuantity = document.querySelector(".second_input__style").value;
let productStatus = document.querySelector(".third_input__style").value;*/
let addProductBtn = document.querySelector(".add_new__style");
let wievListBtn = document.querySelector(".wiev_list__style");
let productlist = document.querySelector(".list__style");

let shoppingList = []

function getProduct(){
  return {
    nameProd: document.querySelector(".first_input__style").value, 
    quantity: document.querySelector(".second_input__style").value,
    status: document.querySelector(".third_input__style").value 
  }
}

function addNewProduct(){
  let newProduct = getProduct()
  shoppingList.push(newProduct)
  console.log("shoppingList")
}


function productlistFun (){

addProductBtn.addEventListener("click", function () 
{ 
  let newProduct = getProduct()
  shoppingList.push(newProduct)
  console.log(shoppingList)
});  

wievListBtn.addEventListener("click", function () 
{ 
  productlist.innerHTML = shoppingList
})
}
productlistFun ()