const airline='TAP air portugal';
const plane='A320';
//we can access the charcters of strings just like the arrays
console.log(plane[0]);
//we can check at which index character occures first

console.log(plane.indexOf("A"));

//check at whcich index character occures last
console.log(airline.lastIndexOf('r'));

//we can cut string using alisce method 
console.log(airline.slice(4));//here it return new string and does not
//manipulate the orignal

console.log(airline.slice(4,7))//starting index is inclusive and endindex is exclusive ;

console.log(airline.slice(-1));//starts from last with last element as -1



const checkMiddleSeat=function(seat)
{
    const s=seat.slice(-1);
    if(s==='b'||s==='c')
    {
        console.log('you got middle seat');
    }
    else
    {
        console.log('you got window seat');
    }
}

checkMiddleSeat('11b');
let s="bye";
console.log(typeof s);
console.log(typeof new String("hi"));

