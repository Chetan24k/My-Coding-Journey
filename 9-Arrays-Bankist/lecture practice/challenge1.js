let checkDogs=function(dogsJulia,dogsKate)
{
  let newDogsJulia=dogsJulia.slice(-2);
  let combinedDogs=[...newDogsJulia,...dogsKate];
    combinedDogs.forEach(function(age,i)
    {
        console.log(`dog number ${i+1} is ${age>=3?`is an adult and is ${age} years old`:`is still a puppy`}`);    
    });
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);