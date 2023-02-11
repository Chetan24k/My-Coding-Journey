// let arr=[23,11,64];
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));// works same as
// console.log(arr[arr.length-1]);
//at method is good for method chaining


//find method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const ans=movements.find(function(element)
// {
//   return  element>500
// })
// console.log(ans);
function find(arr,fun)
{
   for (const i of arr ) 
   {
        if(fun(i))
        {
            return arr[i];
        }
   }
   return false;
}

function logic(element)
{
    console.log(element);
    return element>500;
}
console.log( find(movements,logic));
