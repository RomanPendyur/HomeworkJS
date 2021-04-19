"use strict"

/*Я знайшов це рішення, сам я не зміг додуматись як правильно*/

function numberSimbols (){
     
document.write("<h1>Таблица умножения</h1>"); 
for (let j = 1; j <= 9; j++){  
document.write("<div style='float: left; width: 70px;'>"); 
for (let i = 1; i <=9; i++)  
{ 
document.write(i + "*" + j + "=" +(i*j) + "<br>");  
}  
document.write ("</div>"); 
 
} 
}

console.log(numberSimbols());