'use strict';
//genrate random number in range



let randomNumber =Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score=20;
let a=0;


document.querySelector('.check').addEventListener('click',function()
{
   
   if(!guess)
   {
       document.querySelector('.message').textContent ="No Number😐";
   }
   else if(guess===randomNumber)
   {
       document.querySelector('.message').textContent ="Correct Number😎";
   }  
   else if(guess>randomNumber)
   {
    if(score>1)
    {
       document.querySelector('.message').textContent ="Number is too High📈";
       score--;
       document.querySelector('.score').textContent =score;
    }
    else
    {
        document.querySelector(".score").textContent =0;
        document.querySelector('.message').textContent="Game over😭"
    }
   }
   else if(guess<randomNumber)
   {
    if(score>1)
    {
       document.querySelector('.message').textContent ="Number is too Low📉";
       score--;
       document.querySelector('.score').textContent =score;
    }
    else
    {
        document.querySelector(".score").textContent =0;
        document.querySelector('.message').textContent="Game over😭"
    }


   }
}
)
