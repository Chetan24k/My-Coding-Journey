let arr=['a','b','c','d','e'];
console.log(arr.slice(2)); 
// slices from given index without changing the orignal array 

console.log(arr.slice(-1));
//when we put negative it starts from back 
//with last index being -1

let a=['a','b','c','d','e'];
a.splice(1,2);//from postion one deleted 2 num of elements
//deletes elements from first parameter num 
//second parameter sepcifies num of elements to delete 
console.log(a);

let b=['a','b','c','d','e'];
b.reverse();
console.log(b);

let combined=arr.concat(b);
console.log(combined);
// same as console.log(...arr,...b);

 