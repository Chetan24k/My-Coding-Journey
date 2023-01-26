let exSet=new Set([1,2,3,3,4,5,5,6]);
//has no duplicate elements
console.log(exSet);
//check the if contains elements
console.log( exSet.has(7));
//as set is iterable we can traverse elements using for loop
for (const i of exSet ) {
    console.log(i);
} 
//we can spread it 
console.log(...exSet);
//to convert to array with no duplicate elements use this
let setArray=[...exSet];
console.log(setArray);
//we cant access set elements using index as it does not store 
//elements like array