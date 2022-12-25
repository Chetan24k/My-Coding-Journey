'use strict';
let player1=true;
let player2=false;

let p1Current=0;
let p2Current=0;

let p1Final=0;
let p2Final=0;

const rollDice=document.querySelector(".btn--roll");
const holdDice=document.querySelector(".btn--hold");
const dice=document.querySelector(".dice");
const newGame=document.querySelector(".btn--new");

const p1currDisplay=document.querySelector("#current--0");
const p2currDisplay=document.querySelector("#current--1");

const p1bg=document.querySelector(".player--0");
const p2bg=document.querySelector(".player--1");

dice.classList.add("hidden");

const changeP1bg=function()
{
    p1Current=0;
    p1currDisplay.textContent=p1Current;
    p1bg.classList.remove("player--active");
    p2bg.classList.add("player--active");
}

const changeP2bg=function()
{
    p2Current=0;
    p2currDisplay.textContent=p2Current;
    p2bg.classList.remove("player--active");
    p1bg.classList.add("player--active");
}

const diceCLicked=function()
{
    if(dice.classList.contains("hidden"))
    {
        dice.classList.remove("hidden");
    }
    let d= Math.floor((Math.random() * 6) + 1);
    dice.src=`dice-${d}.png`;
    if(d!=1)
    {
        if(player1===true)
        {
            p1Current+=d;
            p1currDisplay.textContent=p1Current;
        }
        else
        {
            p2Current+=d;
            p2currDisplay.textContent=p2Current;
        }
        
    }
    else if(d===1)
    {
        if(player1===true)
        {
            player1=false;
            player2=true;
            changeP1bg();
        }
        else
        {
            player2=false;
            player1=true;
            changeP2bg();
        }
    }
}

const holdClicked=function()
{
    if(player1===true)
    {
        p1Final+=p1Current;
        document.querySelector("#score--0").textContent=p1Final;
        if(p1Final>=100)
        {
            p1bg.classList.add("player--winner");
            return;
        }
        player1=false;
        changeP1bg();
    }
    else
    {
        p2Final+=p2Current;
        document.querySelector("#score--1").textContent=p2Final;
        if(p2Final>=100)
        {
            p2bg.classList.add("player--winner");
            return;
        }
        player1=true;
        changeP2bg();
    }
}


const newClicked=function()
{
    location.reload();
}

rollDice.addEventListener("click",diceCLicked);
holdDice.addEventListener("click",holdClicked);
newGame.addEventListener("click",newClicked);