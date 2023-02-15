'use strict';
 
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//we have two butoon so to add eventlistener on both button we 
//use for loop
// console.log(btnsOpenModal);//prints 2 nodes with elements that have
//.btn--show-modal in their class,

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);


btnsOpenModal.forEach(Element=>Element.addEventListener("click",openModal));



const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//selecting html element
// console.log(document.documentElement);
// console.log(document.body);

const header= document.querySelector(".header");


//creating and inserting elements
const msg=document.createElement("div");
//this only creates the html element but it is not inserted into page yet

msg.classList.add("cookie-message");
// msg.textContent="we use cookies for improved "
msg.innerHTML=`<h3>we use cookies for improved functionality</h3> <button class="btn btn--close-cookie">Got it!</button> `;
header.prepend(msg);
//adds element as the first child of element
header.append(msg);
//adds element as the last child
// here only one element is present at the end and as element is first  prepended 
//it is not duplicated  and only moved

header.before(msg);
//inserts msg before header as a sibling
header.after(msg);

//delete element
document.querySelector('.btn--close-cookie').addEventListener('click',function()
{
  msg.remove();
  //earlier method
  // msg.parentElement.removeChild(msg);
})

msg.style.backgroundColor="#37383d";
msg.style.width="120%";

console.log(msg.style.height);
//here we will get nothing as style property can only access to inline styles or the the styles we set through js
// and not the styles stored in seprate css files

//to get css files style use>
console.log(getComputedStyle(msg).height);
msg.style.height= Number.parseFloat( getComputedStyle(msg).height,10)+40+"px";
// here as we get the height in string we first convert to number

//we can change the css variables value 
// document.documentElement.style.setProperty('--color-primary','--color-primary')


//attributes
// const logo=document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();
const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.getElementById("section--1");

btnScrollTo.addEventListener('click',function(e)
{
  const s1coords=section1.getBoundingClientRect();
  console.log("section 1",s1coords);
  // console.log(e.target.getBoundingClientRect());
  console.log("pageoff set",window.pageXOffset,window.pageYOffset);
  console.log("doc element",document.documentElement.clientHeight,document.documentElement.clientWidth);
  //scrolling
  // window.scrollTo({left:s1coords.left+window.pageXOffset,top:s1coords.top+window.pageYOffset,behavior:"smooth"}
  //   );
  section1.scrollIntoView({behavior: "smooth"});
})

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function genrateColor()
{
  return `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)}`
}

document.querySelector(".nav__link").addEventListener("click",function(e)
{

  this.style.backgroundColor=genrateColor();
  
  console.log("1",e.target);
})
document.querySelector(".nav__links").addEventListener("click",function(e)
{
  this.style.backgroundColor=genrateColor();

  console.log("2",e.target);
})
document.querySelector(".nav").addEventListener("click",function(e)
{
  this.style.backgroundColor=genrateColor();

  console.log("3",e.target);
  //all have same target as 1 only AS THIS event only genrated there
})