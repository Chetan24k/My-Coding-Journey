const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333, 
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  const accounts = [account1, account2, account3, account4];
  

  //1

  const bankDepositSum=accounts.flatMap(acc=>acc.movements)
  .filter(Element=>Element>0)
  .reduce((acc,curr)=>acc+curr);
  console.log(bankDepositSum)
  
  //2

  const numDeposits1000=accounts.flatMap(acc=>acc.movements).reduce(function(acc,curr)
  {
    
    if(curr>1000)
    {
        acc++;
    }
    return acc;
  },0);
  console.log(numDeposits1000);

//tip
//   in case we are having a++ in ternary operator it will return the value of a 
//   before then it will increment the a
// let a=10
// console.log( true?a++:0);//op:10

//3

let {sum,withdraw}=accounts.flatMap(Element=>Element.movements) .reduce(function(acc,curr)
{
    if(curr>0)
    {
        acc.sum+=curr;
    }
    else
    {
        acc.withdraw+=curr;
    }
    return acc;
},{sum:0,withdraw:0});
console.log(sum,withdraw);

//4
let exceptions=['a','an','the','but','or','on','in','with','is'];
let str="this is a nice title";
let convertTitleCase=function(str)
                            {
                                
                             return str.split(" ")
                                .map((Element,i,arr)=>
                                {
                                    return `${!exceptions.some(curr=>Element===curr)? `${Element[0].toUpperCase()}${Element.slice(1)}`:Element}`
                                })
                                .join(" ");
                            }                  
console.log(convertTitleCase(str));






