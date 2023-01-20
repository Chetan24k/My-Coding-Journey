const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  
    order:function(startIndex,endIndex)
    {
      return [this.starterMenu[startIndex],this.starterMenu[endIndex]];
    },
    printrOrder:function({startIndex,endIndex,locationIndex})
    {
      console.log(`${this.mainMenu[startIndex]}, ${this.mainMenu[endIndex]}  ${this.locationIndex[locationIndex]}`);
    }
  };

// let [a,,b,c,...others]=[...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(a,b,c,others);

let {sat,...remain}=restaurant.openingHours;
// console.log(remain,sat);

function fun(first,second,...rest)
{
    console.log(first,second,rest[3]);
}

let x=[22,33,44];
fun(...x);
fun(1,2,3,4,5,6);
