let a=1;
let b=a;
a=2;
console.log(b);
//1
console.log(a);
//2



let oldArr=[1,2,3,4];
let newArr=oldArr;
newArr[3]=55;
console.log("old "+oldArr);
//[1,2,3,55]
console.log("new "+newArr);
//[1,2,3,55]
