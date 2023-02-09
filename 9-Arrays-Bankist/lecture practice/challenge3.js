function calcAverageHumanAge(ages)
{
    let dogToHuman=ages.map(dogAge=>
        dogAge<=2?2 * dogAge:16 + dogAge * 4
        );
    let totalAge=dogToHuman.filter(Element=>
        Element>=18) .reduce((acc,age,i,arr)=>
        {
          return  acc+age/arr.length;
        },0);
        
    
   
    console.log(totalAge);
    // return totalAge/adultDogs.length;  
}
console.log( calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));