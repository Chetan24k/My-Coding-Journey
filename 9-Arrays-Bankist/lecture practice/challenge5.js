const dogs = [ 
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
    { weight: 8, curFood: 200, owners: ['Matilda'] }, 
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
    { weight: 32, curFood: 340, owners: ['Michael'] }, 
  ]; 

  dogs.map(dog=>
    {
         dog.recommendedFood=Math.round((dog.weight ** 0.75 * 28));
    //   if(dog.curFood > (recommendedFood * 0.90) && dog.curFood < (recommendedFood * 1.10))  
    //     {
 
    //     }
    return dog;
    })
// console.log(dogs);

console.log( dogs.filter(Element=>
    {
       return Element.owners.includes("Sarah");
    })
    .reduce((acc,curr)=>
    {
        console.log(curr);
        acc=curr.curFood>curr.recommendedFood?"eating too much":acc;
        acc=curr.curFood<curr.recommendedFood?"eating too little":acc;
        return acc;
        // acc=curr.curFoodcurr.recommendedFood?"eating too little":acc
    },""));

    let ownersEatTooMuch=dogs.filter(dog=>
        {
          return  dog.curFood>dog.recommendedFood;
        }).flatMap(dog=>
            {
                return dog.owners;
            });
        console.log(ownersEatTooMuch);

    let ownersEatTooLittle=dogs.filter(dog=>
        {
          return  dog.curFood<dog.recommendedFood;
        }).flatMap(dog=>
            {
                return dog.owners;
            });
        console.log(ownersEatTooLittle);

        console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
        console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

    console.log(
        dogs.some(Element=>
            Element.curFood===Element.recommendedFood)
    );
    console.log(
        dogs.some(Element=>
            Element.curFood<(Element.recommendedFood*1.10)&&Element.curFood>=(Element.recommendedFood)*0.90)
    );
    
 console.log(
    dogs.filter(Element=>
        {
            return (Element.curFood<(Element.recommendedFood*1.10)&&Element.curFood>=(Element.recommendedFood)*0.90);
        })
 );
let newdogs=dogs.slice().sort(function(a,b)
{
   return a.recommendedFood-b.recommendedFood;
})
console.log(newdogs);