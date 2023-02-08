let a=[1,2,3,4,5,6];
let b=a.filter(function(element)
{
   return element>2;
})
// console.log(b);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let euroRate=1.1;
let euroToUsd=movements.map((mov)=> {return mov*euroRate}

)

const movementDescription=movements.map((mov,i)=>
`movement ${i+1}:you ${mov>0?'deposited':"withdrew"} ${Math.abs(mov)}`)
console.log(movementDescription);
const user="chetan vijay kharote";
const userName=user.toLowerCase().split(" ").map(function(name)
{
  return name[0];
}).join('');
console.log(userName);



// console.log(euroToUsd);

const arr=[5,1,7,3,2,6];
let res=arr.reduce(function(acc,curr)
{
   acc=acc>curr?acc:curr;
   // acc=Math.max(acc,curr);
   return acc;
}, Number.MIN_SAFE_INTEGER)
// console.log(res);

const users=[
   {firstName:"chetan",lastName:"kharote",age:23},
   {firstName:"doland ",lastName:"trump",age:60},
   {firstName:"vald",lastName:"putin",age:44},
   {firstName:"abe",lastName:"lincoln",age:23},
];

let fullName=users.map(function(curr)
{
   return `${curr.firstName} ${curr.lastName}`;
})
// console.log(fullName);

 let commonAge=users.reduce(function(acc,curr)
 {
   acc[curr.age]=acc[curr.age]?acc[curr.age]+1:1;
   return acc;
 },{})
//  console.log(commonAge);

let  ageGreate=users.filter(function(element)
{
   return element.age<30;
}).map(function(element)
{
   return element.firstName+" "+element.lastName;
})
console.log(ageGreate);
//
// let reduceAge=users.reduce(function(acc,element)
// {
//   if(element.age<30) acc.push(element.firstName);
// },[])
// console.log(reduceAge);

