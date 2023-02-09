// Array squared
const input = [1, 2, 3, 4, 5];

let output=input.map(Element=>Math.pow(Element,2));
console.log(output);

// Sum of every positive element

const input2 = [1, -4, 12, 0, -3, 29, -150];

let output2=input2.filter(Element=>Element>0).reduce((acc,curr)=>acc+curr);
console.log(output2);

// Calculate median and mean

const input3 = [12, 46, 32, 64];

// let output3=input3.reduce((acc,curr,i,arr)=>
// acc+=curr/arr.length
// )
// console.log(output3);

input3.sort((a,b)=>a-b);

// input3.reduce((acc,curr,i,arr)=>
// {
//     acc.mean+=curr/arr.length;
// },
// {median:0,mean:0})
console.log(input3);
let op3=input3.reduce(
    (accumulator, currentValue, index, array) => 
    {
      accumulator.mean += currentValue / array.length;
      console.log(accumulator.mean, currentValue / array.length);
      return accumulator;
    },{ mean: 0, median: 0 })
console.log(op3);


//Get name initials

const input4 = "George Raymond Richard Martin";
let output4=input4.split(" ").map(Element=>Element[0]).join("");
console.log(output4);

//Age difference from the youngest and oldest

const input5 = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

let output5=Object.values(input5.reduce(function(acc,curr,i,arr)
{
    acc.min=Math.min(acc.min,curr.age);
    acc.max=Math.max(acc.max,curr.age);
    acc.diff=acc.max-acc.min;
    return acc;

},{min:input5[0].age,max:0,diff:0}));
console.log(output5);

//Numeronyms
const input6 = "Every developer likes to mix kubernetes and javascript";

const output6= input6.split(" ").map(Element=>
  {
    let str=Element;
    if(Element.length>4)
    {
      let num=Element.length-2;
      str=Element[0]+num+Element[Element.length-1];
    }
    return str;
  }).join(" ");
  console.log(output6);

  // Count elements in array of arrays

  const input7 = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
let output7=input7.flat().reduce((acc,curr,i,arr)=>
{
  acc[curr]=acc[curr]?acc[curr]+1:1;
  return acc;
},{});
console.log(output7);

//High performing students

const input8 = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] }
];

let output8=input8.map(function(Element)
{
  let sum=Element.scores.reduce((acc,curr)=>{return acc+curr});
 
  return {name:Element.name,average:sum/Element.scores.length}
}
  ).filter(Element=>
    Element.average>90);

    console.log(output8);
    

    // High Priced Product Categories

  
    const products = [
      { name: "Product 1", price: 20, category: "Electronics" },
      { name: "Product 2", price: 30, category: "Clothes" },
      { name: "Product 3", price: 40, category: "Electronics" },
      { name: "Product 4", price: 50, category: "Clothes" },
      { name: "Product 5", price: 60, category: "Clothes" },
      { name: "Product 6", price: 70, category: "Electronics" },
      { name: "Product 7", price: 80, category: "Clothes" },
      { name: "Product 8", price: 90, category: "Electronics" },
    ];

   

const productsByCategory = products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  
console.log(productsByCategory);

let output10=Object.keys(productsByCategory).map(function(element)
{
    let average=productsByCategory[element].reduce(function(acc,curr,i,arr)
    {
      acc+=curr.price/arr.length;
      return acc;
    },0)
    return {category:element,average:average};
})
console.log(output10);



