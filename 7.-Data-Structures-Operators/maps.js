let rest=new Map();
// set values in key value pairs
rest
.set(1,'hey')
.set(2,'bye')
.set(3,'heyy');
console.log(rest);
//Map(3) { 1 => 'hey', 2 => 'bye', 3 => 'heyy' }

console.log( rest.get(2));

console.log(rest.size);
//3

for (const [i,v] of rest) {
    console.log(i,v);
}
// arrays dont work as KEYS in maps as  arrays are non primitive data types
//so when we check if given array is present as key or not in maps
//js checks referance for non primitive  and not values 

rest.set([1,2],'referance type');
rest.get([1,2]);
//undefined


//convert object to map
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
  let hoursMap=new Map(Object.entries(openingHours));
  console.log(hoursMap);

//another way of creaTING MAP
let questionair=new Map([
    ['question','what is capital of india?'],
    [1,'mumbai'],
    [2,'delhi'],
    [3,'chennai'],
    ['correct',2]
])
console.log(questionair);
// let ans=prompt("hey give the answer?")
// for (const [key,value] of questionair) {
//     if(ans===questionair.get('correct'))
//     {
//         console.log("correct❤");
//     }
// }

//convert map to array
let mapaArray=[...questionair];
console.log(mapaArray);
//maps also has same functions as arrays
questionair.keys();
questionair.values();
questionair.entries();