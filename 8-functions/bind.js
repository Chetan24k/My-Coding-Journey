'use strict';
let lufthanza={
    airline:"lufthanza",
    iatacode:'LH',
    bookings:[],
    book:function(name,flightNum)
    {
        console.log(`${name} booked a seat on ${this.airline} flight`);
        console.log(this);
        this.bookings.push({flight:`${this.iatacode} ${flightNum}`,name})
    }
}

const euroWings={
    airline:"eurowings",
    iatacode:"EW",
    bookings:[],

}
//in case of bind also sets this keyword but n=bind does not immediatly call the 
//function but instead it returns new function whose this keyword is permanantly bound to object


//  let bookEuro=lufthanza.book.bind(euroWings);
//  bookEuro("hi",45);
// //  hi booked a seat on eurowings flight
// //this--> { airline: 'eurowings', iatacode: 'EW', bookings: [] }
// console.log(euroWings);//does not change the object but still bookEuro's this points to euroWings


// // when we directly want to use methods without using object name  
// let bookLuft=lufthanza.book.bind(lufthanza);


// //we can also set default arguments in bind function

// let bookEuro2=lufthanza.book.bind(euroWings,"bond");
// bookEuro2(32);
// console.log(euroWings.bookings);

//with event listeners
lufthanza.planes=300;
lufthanza.buyPlane=function(){
console.log(this);
this.planes++;
console.log(this.planes);
};
let fun=function()
{
    console.log(this);
    console.log("hello");
}
document.querySelector('.buy').addEventListener("click",lufthanza.buyPlane);
//NAN because In an event, this refers to the element that received the event.
document.querySelector('.buy').addEventListener("click",lufthanza.buyPlane.bind(lufthanza));

//partial application
const addtax=(rate,value)=>value+value*rate;
console.log(addtax(0.1,200));
//here we want to have another function same as addtax function but
//with rate value already set than use bind
let addFixedRate=addtax.bind(0.23,null);
//this is same as
// addFixedRate=value=>value+value*0.23;

// another way with higher order functions
const addTaxRate=function(rate)
{
    return function(value)
    {
        return value+value*rate;
    }
}
const addVat2=addTaxRate(0.23);
console.log(addVat2(100));

