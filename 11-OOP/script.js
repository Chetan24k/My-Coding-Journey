'use strict';
const person=function(firstName, birthYear)//construtor function 
{
    //object variable are called properties
    this.fname=firstName;
    this.by=birthYear;
    //we dont create methods in constructor functions as for thousands of objects thousands of methods will be created and it will cause 
    // performance issues
    // console.log(this);//person {} object of type person
}
//cant use arrow function as it does not have this keyword 
let chetanObj=new person("chetan",1999);
//1. new empty on=bject is created 
//2.  functin is called and this points to empty object 
//3.  objects is linked to prototype
//4.  function automatically returns new object
console.log(chetanObj);
let manasviObj=new person("manasvi",2000);
console.log(manasviObj);
let vijay="vijay";
console.log(chetanObj instanceof  person);
console.log(vijay instanceof person);
person.prototype.pin=421503;
chetanObj.__proto__.age=21;
console.log(manasviObj);
console.log(person.prototype);


let obj={
    name:"hi"
}
obj.__proto__.points=22;
console.log(obj.__proto__);


