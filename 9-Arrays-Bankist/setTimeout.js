setTimeout(()=>
console.log("hello ji")
,5000);//prints  after outside timeout
//set timeout automatically calls callback function
// in future

//set timeout is called first it registers the callback
//fucntion to be called later(5 sec) and then execution simply continues 
console.log("outside timeout");// prints first
setTimeout((Element) => {
     console.log(Element);;
}, 1000);
//as we dont call settimeout like other functions we cannot pass the arguments to it
// is automatically called we cant pass the argumets to it normally

//another way to pass the argumets
const ingredients=["olives 🥒","mushroom 🍄"];
const pizzaTimer=setTimeout((para1,para2) => {
    console.log(`ingredients are ${para1} and ${para2}`);
}, 2000,...ingredients);

//we can stop the timeout before its executes callback function
if(ingredients.includes("olives 🥒"))clearTimeout(pizzaTimer);


//set interval executes callback function continulously after fixed interval

setInterval(function()
{
    let d=new Date();
    console.log(` Current time is ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
},2000);