let fun=function()
{
    console.log("hello this is function");
}
fun();
// document.addEventListener('click',function()
// {
//     console.log("❤");
// })


let a=[];
function higherOrder(logic)
{
    console.log(logic);
    a.push(logic);
}
higherOrder(lower());
console.log(a);
function lower()
{
    return 2;
}

//function accepting a callback function
const greet =(para1)=>
{
    return  greet2=(para2)=>
    { 
        console.log(para1+para2);
    
    };
}
greet(1)(2);

function addition(num1,num2)
{
    return num1+num2;
}
function substarction(num1,num2)
{
    return num1-num2;
}

let displayResult=function(operationToPerform,num1,num2)
{
    let result=operationToPerform(num1,num2);
    document.getElementById("result").innerHTML=result;
    document.getElementById("result").style.fontSize="large";
}

displayResult(addition,5,3);
displayResult(substarction,5,3);

