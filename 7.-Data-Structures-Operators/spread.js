let a=[1,2,3,8];
// let oldWay=[4,5,a[0],a[1],a[2]];
// console.log(oldWay);
// let newWay=[4,5,...a];
// console.log(newWay);

// console.log(a);
// console.log(...a);

// function fun(a,b,c,d)
// {
//     console.log(a,b,c,d);
// }

// fun(...a);
// let b=[...a];
// let c=a;
// c[0]=9;
// b[0]=7;
// console.log(b);
// console.log(c);
// console.log(a);

let bike1={
    bikeName:"yamaha",

}


// let x=[1,2,3];
// let y=[4,5,6];

// let c=[...x,...y];
// console.log(c);

let bike2={...bike1,mileage:50};
bike2.bikeName="honda";
console.log(bike1.bikeName);
console.log(bike2.bikeName);
console.log(...bike2);

// let str="chetan";
// console.log(...str);

// let valuesReceived=[
//     prompt("enter first digit"),
//     prompt("enter second digit"),
//     prompt("enter third digit")
// ];




// console.log(Math.min(...valuesReceived));

// console.log(valuesReceived);