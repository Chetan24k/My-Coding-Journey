'use strict';
//selecting elements 
const score0El=document.querySelector("#score--0");
const score1El=document.getElementById("score--1");
const current0El=document.getElementById("current--0");
const current1El=document.getElementById("current--1");
const player0El=document.querySelector(".player--0");
const player1El=document.querySelector(".player--1");


const diceEl=document.querySelector(".dice");
const btnNew=document.querySelector(".btn--new");
const btnRoll=document.querySelector(".btn--roll");
const btnHold=document.querySelector(".btn--hold");
 

//starting condtion


const scores =[0,0];
let currentScore;
let activePlayer;
let playing;

const init=function()
{
    currentScore=0;
    activePlayer=0;
    playing=true;
    score0El.textContent=0;
    score1El.textContent=0;
    diceEl.classList.add("hidden");
    document.querySelector(`.player--${activePlayer}`).classList.remove(`player--winner`);
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
}

init();

let swtichPlayer=function()
{
    currentScore=0;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        // document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        activePlayer=activePlayer===0?1:0;
        // document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        
} 

//rolling dice functionality
btnRoll.addEventListener("click",function()
{
    //1.genrating random dice roll
    const dice =Math.trunc(Math.random()*6)+1;
    if(playing===true)
    {
    //2. display dice
    diceEl.classList.remove("hidden");
    console.log(dice);
    diceEl.src=`dice-${dice}.png`;
    //3. check for 1:if true switch to next player
    if(dice!==1)
    {
        //add dice to the current score
        currentScore+=dice; 
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        //change later
    }
    else
    {
        //check for next player
        swtichPlayer();
    }}

})

btnHold.addEventListener("click",function()
{

   //1. add current score to active players score
   if(playing)
   {
   scores[activePlayer]+=currentScore;
   document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

   if(scores[activePlayer]>=20)
   {
        playing=false;
        diceEl.classList.add("hidden");

        document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
        document.querySelector(`.player--${activePlayer}`).classList.remove(`player--active`);

   }
   else
   {
    // document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    swtichPlayer();
   }
}
  

})
//dont need to call the function inside addEventListener just pass the 
//value of the function js calls the function
btnNew.addEventListener("click",init);

