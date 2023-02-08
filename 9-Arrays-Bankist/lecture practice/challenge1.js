let checkDogs=function(dogsJulia,dogsKate)
{
  let newDogsJulia=dogsJulia.slice(0,(dogsJulia.length-2));
  let combinedDogs=[...newDogsJulia,...dogsKate];
    combinedDogs.forEach(function(age,i)
    {
        console.log(`dog number ${i+1} is ${age>=3?`is an adult and is ${age} years old`:`is still a puppy`}`);    
    });
}
checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3]);

// let a=[1,2,3,4,5,6];
// let b=a.slice(2);
// b=[0,9];
// console.log(a);
// console.log(b);