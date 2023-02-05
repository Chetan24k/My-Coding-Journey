// //closure is not a something that we do manually it sometimes just happens
// //and we need to recognize it

const secureBooking=function()
{
    let passangerCount=0;
    console.log(passangerCount);
    return function()
    {
        passangerCount++;
        console.log(passangerCount);
    }
    
}
const booker=secureBooking();

booker();
booker();
booker();
let book2=secureBooking();
book2();
// //this booker function exist in global scope and securebookings functions
// //envrionment is no longer active but booker function has access to all the variables that were present at the time of function call
//  let d=7;



// function x()
// {
//     let a=7;
//     function y()
//     {
//         let c=5;
//         console.log(a);
//     }
//    return y;
// }

// let z=x();
// z();
// console.log(z);