let a=0||1;
console.log(a);
console.log(0||undefined);
console.log(`nullish coalescing operator`);
let b=null;
console.log(b??1);
console.log(`logical assignment operator`);
let d=0;
d??=20;
console.log(d);

let obj={
    cost:20,
    category:undefined
}
obj.category??=`desert`;
console.log(obj.category);
