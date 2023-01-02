// a. if the this keyword is outside of any function (just outside in global scope)​

// e.g.​

// console.log(this);​

// // Window object {...}​

// ​

// ​

// b. If the lexical scope (parent scope) of arrow function is global scope​

// e.g.​

// ​

// const age = birthYear => {​

// console.log(birthYear);​

// console.log(this);​

// }​

// ​

// age(1990);​

// // 1990​

// // Window object {...}​

// ​

// ​

// c. In case of regular function if you are not using strict mode​

// e.g.​

// const age = function (birthYear) {​

// console.log(birthYear);​

// console.log(this);​

// };​

// ​

// age(1990);​

// // 1990​

// // Window object {...}​​