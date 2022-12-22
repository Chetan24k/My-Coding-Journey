'use strict';
//genrate random number in range



let randomNumber =Math.floor(Math.random() * (20 - 1 + 1)) + 1;
console.log(randomNumber);

document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function(){
    const guess=Number( document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent ="No Number😐";
    }
    else if(guess===randomNumber)
    {
        document.querySelector('.message').textContent ="Correct Number😐";
    }
})