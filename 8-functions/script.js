'use strict';
const bookings=[];
//we can define default values for variabes in the parameters
//if no value is passed ir undefined is passed then it takes default value
let createBooking=function(flightNum,numPassengers=1,price=199*numPassengers)
{
    const booking={
        flightNum,
        numPassengers,
        price
    }
    bookings.push(booking);
    console.log(booking);
}
createBooking(121,undefined,undefined);
//when we want to use default values use undefined in arguments

