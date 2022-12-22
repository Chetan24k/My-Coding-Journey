'use strict';
//genrate random number in range



let randomNumber =Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score=20;
let a=0;


document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click',function()
{
   const guess=Number( document.querySelector('.guess').value);
a++;
console.log(a);
   
   if(!guess)
   {
       document.querySelector('.message').textContent ="No Number😐";
   }
   else if(guess===randomNumber)
   {
       document.querySelector('.message').textContent ="Correct Number😎";
   } 
  else if(score===0)
   {
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent="game over😭"
    return;
   }  
   else if(guess>randomNumber)
   {
       document.querySelector('.message').textContent ="Number is too High📈";
       score--;
       document.querySelector('.score').textContent =score;
   }
   else if(guess<randomNumber)
   {
       document.querySelector('.message').textContent ="Number is too Low📉";
       score--;
       document.querySelector('.score').textContent =score;

   }
}
)
