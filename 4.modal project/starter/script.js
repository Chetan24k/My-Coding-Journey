'use strict';
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal");
const btnShowModal=document.querySelectorAll(".show-modal");
console.log(btnShowModal[1]);

let showModal=function()
{
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

let closeModal=function()
{
      overlay.classList.add("hidden");
      console.log("hi");
      modal.classList.add("hidden");  
}

for(let i=0;i<btnShowModal.length;i++)
{
    btnShowModal[i].addEventListener("click",showModal);
}
btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);