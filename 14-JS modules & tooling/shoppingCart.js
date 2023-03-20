//exporting module
console.log("exporting module");
let shippingCost=100;
let cart=[];

export function addToCart(product,quantity)
{
    cart.push(product);
    console.log(`you have added ${quantity} ${product} to the cart}`);
}

let totalPrice=1000;
let totalQuantity=20;

export {totalPrice,totalQuantity};
