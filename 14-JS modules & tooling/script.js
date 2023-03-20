//importing module
// import {addToCart,totalPrice,totalQuantity} from './shoppingCart.js';
// console.log("importing module");
// addToCart("iphone",2);

// console.log(totalPrice,totalQuantity);
import * as shoppingCart from './shoppingCart.js';
shoppingCart.addToCart("bag",5);
console.log(shoppingCart.totalPrice);