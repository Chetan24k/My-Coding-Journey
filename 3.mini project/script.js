'use strict';
//genrate random number in range
let randomNumber =Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let score=20;
let a=0;
let highScore=0;

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
       highScore=score>highScore?score:highScore;
       document.querySelector(".highscore").textContent=highScore;
   } 
   else if(guess!=randomNumber)
   {
    if(score>1)
    {
        document.querySelector('.message').textContent=guess>randomNumber?"Number is too High📈":"Number is too Low📉";
    }
    else
    {
        document.querySelector(".score").textContent =0;
        document.querySelector('.message').textContent="Game over😭"
    }
   } 
}
)

// document.querySelector(".again").addEventListener('click',function()
// {
//     document.querySelector("body").style.backgroundColor="#222";
//     let a=document.queryselector(".message").textContent;
//     console.log(a);
//     // document.queryselector(".message").textContent="Start Guessing...";

//     // document.querySelector(".number").textContent="?";
//     // document.queryselector(".score").textContent=20;
//     // randomNumber =Math.floor(Math.random() * (20 - 1 + 1)) + 1;
// }
// )
document.querySelector(".again").addEventListener('click',function()
{
    score=20;
    document.querySelector(".score").textContent=score;
    document.querySelector(".message").textContent="start guessing...";
    document.querySelector("body").style.backgroundColor="#222";
    randomNumber=Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    document.querySelector(".guess").value="";
    document.querySelector(".number").style.width="15rem";
    document.querySelector(".number").textContent="?";
})
