let arr=[[[1,[6,[9,0],8],2,3]]];
console.log(arr.flat(3));

let a2=new Array(7);
a2.fill(1);
a2.fill(2,0,3);
console.log(a2);

let a3=Array.from({length:5},(curr,index)=>index+2);
console.log(a3);