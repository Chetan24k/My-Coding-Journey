'use strict';
//genrate random number in range



let randomNumber =Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score=20;
let a=0;

console.log(randomNumber);
document.querySelector('.check').addEventListener('click',function()
{
   let guess=Number(document.querySelector(".guess").value);
   if(!guess)
   {
       document.querySelector('.message').textContent ="No Number😐";
   }
   else if(guess===randomNumber)
   {
       document.querySelector('.message').textContent ="Correct Number😎";
       document.querySelector('body').style.backgroundColor="Green";
       document.querySelector(".number").style.width="30rem";
       document.querySelector(".number").textContent=guess;

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
