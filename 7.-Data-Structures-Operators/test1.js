'use strict';
// const arr=[1,2,3,4];
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// const d=arr[3];

// console.log(a);
// //1

// // const [w,x,y,z]=arr;
// // console.log(`${w} ${x} ${y} ${z}`);

// let  [w,,y,z]=arr;
// console.log(`${w} ${y} ${z}`);
//1 3 4


// let a=1;
// let b=2;
// [b,a]=[a,b];
// console.log(`${a} ${b}`);
// //2 1

// function fun()
// {
//     return [1,2];
// }

// let [a,b]=fun();

// console.log(a,b);

// let arr=[1,2];
// let [a,b,c=1]=arr;
// console.log(a,b,c);


const obj={
    fname:"chetan",
    no:21,
    male:true,
}

let {no,fname,male}=obj;
console.log(no,fname,male);
// let {fname:n,no:r,male:m,pin=421503}=obj;


let a=1;
let b=2;
// let c=3;
const obj2={a:3,b:4,c:3};


({a,b}=obj2);

console.log(obj2);