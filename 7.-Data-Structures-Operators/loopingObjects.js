let openingHours= {
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
  };
  // Data needed for a later exercise
  const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  
  // Data needed for first part of the section
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
    openingHours,
  
    order:function(startIndex,endIndex)
    {
      return [this.starterMenu[startIndex],this.starterMenu[endIndex]];
    },
    //no need to write function keyword
    printrOrder({startIndex,endIndex,locationIndex})
    {
      console.log(`${this.mainMenu[startIndex]}, ${this.mainMenu[endIndex]}  ${this.locationIndex[locationIndex]}`);
    }
  };


// console.log(Object.keys(restaurant.openingHours));
// console.log(Object.values(restaurant.openingHours));

for (const [index,values] of Object.entries(restaurant.openingHours) )
{
    console.log(index,values );
}
const day=['mon','tue','wed','thu','fri','sat','sun'];

for (const index of day.entries()) {
 console.log(index);   
}

for (const [iterator] of day.values()) {
    console.log(iterator);
}
// console.log(day.entrie);

for (const iterator of Object.entries(day) ) {
  console.log(iterator);
}
