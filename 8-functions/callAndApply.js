let lufthanza={
    airline:"lufthanza",
    iatacode:'LH',
    bookings:[],
    book:function(name,flightNum)
    {
        console.log(`${name} booked a seat on ${this.airline} flight`);
        this.bookings.push({flight:`${this.iatacode} ${flightNum}`,name})
    }
}

lufthanza.book("chetan",221);
console.log(lufthanza);
const euroWings={
    airline:"eurowings",
    iatacode:"EW",
    bookings:[],

}

let book=lufthanza.book;
//here we assign method from lufthanza and book becomes new function 
//it no longer belongs to lufthanza
//book("chetan",24)//error

//this keyword points to undefiend as book is now seprate function

//we have to tell javascript where this keyowrd should point at
book.call(euroWings,"bab",23);//as function is also object we can call methods on it
//first argument tell where we want the this keyword to point to
//we have called the call method on book function which will call
const swiss={
    airline:"swiss",
    iatacode:"SW",
    bookings:[],

}
swiss.book=book;
swiss.book("bob",23);
console.log(swiss);
//here changes in object occures as book function is 
//added to swiss object
console.log(euroWings);
//but in euro wings object book function is not added
// as we just BORROW the function from lufthanza object 

//----Apply method
//its same as Apply method but here we pass arguments in array format

book.apply(euroWings,["gil",43]);
// but we can us array with call() method as well with spread
book.call(euroWings,...["gil",43]);