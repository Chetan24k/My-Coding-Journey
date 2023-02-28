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

person.prototype.calcAge=function(currentYear)
{
    return currentYear-this.by;
}
person.prototype.species="humans";

// console.log(chetanObj.calcAge(2037));
// console.log(Object.prototype.isPrototypeOf(chetanObj) );

console.log(chetanObj.__proto__.__proto__.__proto__);
let arr=[1,2,3,4,5];
console.log(Array.prototype);

//class declaration

class personCl{
    constructor(birthYear,name)
    {
        this.birthYear=birthYear;
        this.fname=name;
    }

    calcAge(currentYear)
    {
        console.log(currentYear-this.birthYear);
    }

    // get birthYear()
    // {
    //     console.log(this.birthYear);
    // }
    set fname(fullName)
    {
        if(fullName.includes(" ")) this._fname=fullName;
        // fullName.includes(" ")&&this.fname=fullName;
        else console.log("not a fullname");
    }
    get fname()
    {
        console.log( this._fname);
    }

}

let alex=new personCl(1988,"alex perira");
console.log(alex);
alex.fname="chetan kharote";
console.log(alex.fname);
console.log(alex.__proto__===personCl.prototype);

//inheritance in classes

class studentCl extends personCl {
  constructor(birthYear,fname,course) 
  {
    super(birthYear,fname);
    this.course=course;
  }
}
let student1=new studentCl(1999,"ck","cs");
student1.calcAge(2010);
console.log(student1);


//setters and getters
const bank={
    movements:[20,30,100,450],
    get latest()
    {
        console.log(this.movements.slice(-1).pop());
        console.log(this.movements[0]);
    },
    set setName(name){
        this.name=name;
    }
}
console.log(bank.latest);
bank.setName="boi";
console.log(bank);

class account{

    #pin;
    #movements;
    constructor(owner,currency,pin)
    {
        this.owner=owner;
        this.currency=currency;
        this.pin=pin;
        this._movements=[];
    }
    set deposit(amt)
    {
        this.movements.push(amt);
    }
    set withdraw(amt)
    {
        this.deposit=-amt;
    }
    _approveloan(amt)
    {
        return true;
    }
    requestloan(amt)
    {
        if(this._approveloan())
        {
            this._movements.push(amt);
        }
    }

}
let acc1=new account("chetan","$",1234);
acc1.deposit=200;
acc1.withdraw=150;
console.log(acc1.movements);
console.log(acc1.pin);