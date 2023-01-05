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

let arr=[1,2];
let [a,b,c=1]=arr;
console.log(a,b,c);
