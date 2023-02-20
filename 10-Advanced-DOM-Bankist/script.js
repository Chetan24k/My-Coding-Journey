'use strict';
 

const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.getElementById("section--1");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav=document.querySelector(".nav");
const header=document.querySelector(".header");
// console.log(header);
///////////////////////////////////////
// Modal window

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
  
  // console.log("1",e.target);
})
document.querySelector(".nav__links").addEventListener("click",function(e)
{
  this.style.backgroundColor=genrateColor();

  // console.log("2",e.target);
})
document.querySelector(".nav").addEventListener("click",function(e)
{
  this.style.backgroundColor=genrateColor();

  // console.log("3",e.target);
  //all have same target as 1 only AS THIS event only genrated there 
})

//page navigation
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
//page navigation

// let navlinks=document.querySelectorAll(".nav__link");
// navlinks.forEach(Element=>Element.addEventListener("click",function(e)
// {
//   e.preventDefault();
//   const id=this.getAttribute("href");
//  console.log(id);
//  document.querySelector(id).scrollIntoView({behavior:"smooth"});
// }))

document.querySelector(".nav__links").addEventListener("click",function(e)
{
  e.preventDefault();

  if(e.target.classList.contains("nav__link"))
  {
    const id=e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
})

//going downwards child

const h1=document.querySelector("h1");

//going downwards

// console.log(h1.querySelectorAll(".highlight"));

//going downwards
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color="white";
h1.lastElementChild.style.color="orangered";

//going upwards selecting parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

h1.closest('.header').style.background="var(--gradient-secondary)";
//closest method finds parent no matter how far up in dom tree basicalyy it is opposite of opposite of queryselector


//traversing siblings elements
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);

// console.log(...h1.parentElement.children);
[...h1.parentElement.children].forEach(function(element)
{
  if(element!=h1)
  {
    // element.style.transform="scale(0.5)"
  }
})
let opTab=document.querySelector(".operations__tab-container");
opTab.addEventListener("click",function(e)
{
 let target=(e.target.closest(".btn"));
 if(!target)return;

 //removal of active classes
 [...document.querySelectorAll(".operations__tab--active")].forEach(element=>element.classList.remove("operations__tab--active"));
  [...document.querySelectorAll(".operations__content--active")].forEach(element=>element.classList.remove("operations__content--active"));

 //adding the active class to elements
document.querySelector(`.operations__content--${target.dataset.tab}`).classList.add("operations__content--active");
 target.classList.add("operations__tab--active");
})


let navLinks=document.querySelectorAll(".nav__link");

function mouseMovement(e)
{
  // console.log(this);
  // console.log("nav",e.target);
  if(e.target.classList.contains("nav__link"))            
  {
    const link=e.target;
    const siblings= link.closest(".nav").querySelectorAll(".nav__link");
    // console.log("sibling",siblings);
    siblings.forEach(element=>
      {
        if(element!=link)
        {
          element.style.opacity=this;
        }
      })

  }
}
document.querySelector(".nav").addEventListener("mouseover",mouseMovement.bind(0.5));
document.querySelector(".nav").addEventListener("mouseout",mouseMovement.bind(1.0));

let coOrd=nav.getBoundingClientRect();
// window.addEventListener("scroll",function(e)
// {

//   console.log(window.scrollY);
//   if(coOrd.top<=window.scrollY)
//   {
//      nav.classList.add("sticky"); 
//   }
//   else
//   {
//     nav.classList.remove("sticky"); 

//   }
// })
// const obsCallback=function(entries,observer)//will get called each time traget element intersect the root element
// {
//     entries.forEach(entry=>
//       {
//         console.log(entry);
//       })
// }
// const obspOptions={
//   root:null,//the element wer want to intersect null means viewport
//   threshold:0.2
//   //target element is intersecting the element at the threshold that we are defining
// }
console.log(header.offsetHeight);
let navHeight=nav.getBoundingClientRect().height;
// const observer=new IntersectionObserver(obsCallback,obspOptions);
// observer.observe(section1)//section1 is target;
const headObserver=new IntersectionObserver(stickynav,{
  root:null,
  threshold:0,
  rootMargin:-navHeight+"px" 
});
headObserver.observe(header);
function stickynav(entries)
{
   const [entry]=entries;
   
   if(entry.isIntersecting===false){
   nav.classList.add("sticky");
  }
   else{
    nav.classList.remove("sticky");

   }
}

let sectionArr=document.querySelectorAll(".section");
sectionArr.forEach(element=>
  {
    console.log(element);
    return element.classList.add("section--hidden")
  });
let revealSection=function(entries,observer)
{
  let [element]=entries;
  if(!element.isIntersecting)return;
    element.target.classList.remove("section--hidden");

    observer.unobserve(element.target);
 
}

let observer=new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15
})

sectionArr.forEach(element=>
 {
  element.classList.add("section--hidden")

   observer.observe(element);
}
  )




 let revealImage=function(entries,observer)
  {
    let [entry]=entries;
    console.log(entry);
    entries.forEach(function(entry)
    {  
      if(entry.isIntersecting===false)return
      entry.target.src=entry.target.dataset.src;
      entry.target.addEventListener("load",function()
      {
        entry.target.classList.remove("lazy-img"); 
      })
   
    observer.unobserve(entry.target) });
    // entry.target
  }

  const showImg = function(entries, observer){
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
     
        entry.target.src = entry.target.dataset.src;
      
        entry.target.addEventListener('load', function(){
        entry.target.classList.remove('lazy-img');
        });
        observer.unobserve(entry.target);
    });
  };
let imageObserver=new IntersectionObserver(showImg,
  {
    root:null,
    threshold:0.1,
    rootMargin:"-200px"  });

  let images=document.querySelectorAll("img[data-src]");
  console.log(images);
  images.forEach(function(element)
  {
   return imageObserver.observe(element);
  })
  
