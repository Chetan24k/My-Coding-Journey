'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
const displayMovements=function(movements)
{
containerMovements.innerHTML='';

  movements.forEach(function(mov,i) 
  {
    let type=mov>0?"deposit":"withdrawal";
    let html=`
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;
containerMovements.insertAdjacentHTML('afterbegin',html);
  });
};
displayMovements(account1.movements);



function createUserNames(accounts)
{
  accounts.forEach(function(user)
  {
    user.username=user.owner.toLowerCase().split(" ").map(function(name)
    {
      return name[0];
    }).join('');
  })
}
// createUserNames(accounts);


function makeWithdraw(accounts)
{
    accounts.forEach(acc => 
    {
     acc.withdrawArray=acc.movements.filter(Element=>Element<0);
    });
}
function makeDeposites(accounts)
{
    accounts.forEach(acc => 
    {
     acc.depositsArray=acc.movements.filter(Element=>Element<0);
    });
} 

// function calculateBalance(accounts)
// {
//   accounts.forEach(acc=>
//   acc.balance=  acc.movements.reduce((acc,element)=>
//     acc+element  )
//     )
  
// }
function updateUI(account)
{
  displayMovements(account.movements);

  calculateBalance(account);

  calcDisplaySummary(account);
}

function calculateBalance(account)
{
  // console.log(movements);
   account.balance= account.movements.reduce((acc,Element)=>
    {
       return acc+Element;
    })
  // console.log(balance,"hii");
  labelBalance.textContent=account.balance;
}

// function displayBalance()
// {
//   account1.balance=calculateBalance(accounts[0]);
//   labelBalance.textContent=accounts[0].balance+" €";
// }
// displayBalance();
// console.log(account1.balance);

function calcDisplaySummary(account)
{
  const income= account.movements.filter(Element=>Element>0).reduce((acc,curr)=>acc+curr);
  labelSumIn.textContent=`${income} E`;

  const out=account.movements.filter(Element=>Element<0)?.reduce((acc,curr)=>acc+curr);
  labelSumOut.textContent=`${Math.abs(out)} E`;

  const interest=account.movements.filter(mov=>mov>0).map(deposite=>deposite*account.interestRate/100).filter((int,i,arr)=> int>=1).reduce((acc,int)=>acc+int);
  labelSumInterest.textContent=`${interest} E`;
}
// calcDisplaySummary(account1.movements);
 
//event handlers
createUserNames(accounts);

let currentAccount;
btnLogin.addEventListener("click",function(e)
{console.log("hi");
  e.preventDefault();
  currentAccount= accounts.find(acc=>acc.username===inputLoginUsername.value);
  if(currentAccount&& currentAccount.pin===Number(inputLoginPin.value))
  {
    console.log("login");
    labelWelcome.textContent=`welcome back, ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity=100;

    inputLoginUsername.value=inputLoginPin.value="";
    inputLoginPin.blur();
  
   updateUI(currentAccount)

  }
  
});
btnTransfer.addEventListener("click",function(e)
{
  e.preventDefault();
  const amount=Number(inputTransferAmount.value);
  const receivedAcc=accounts.find(Element=>Element.username===inputTransferTo.value);
  console.log(amount,receivedAcc);
  console.log( receivedAcc?.username!==currentAccount.username);
  if(amount>0&&
    receivedAcc&&
    currentAccount.balance>=amount&&
    receivedAcc?.username!==currentAccount.username)
  {
    console.log("valid");
    currentAccount.movements.push(-amount);
    receivedAcc.movements.push(amount);
    updateUI(currentAccount);
  }
  inputTransferAmount.value=inputTransferTo.value="";
});

btnClose.addEventListener("click",function(e)
{
  e.preventDefault();
 let username= inputCloseUsername.value;
 let pin=Number( inputClosePin.value);
  if(username===currentAccount.username&&pin===currentAccount.pin)
  {
      console.log("closed");
      accounts.splice(accounts.findIndex(Element=>Element.username===username),1);
     containerApp.style.opacity=0;
     labelWelcome.textContent=`Log in to get started`;

  }
  inputCloseUsername.value=inputClosePin.value="";


})

//some method
btnLoan.addEventListener("click",function(e)
{
  e.preventDefault();
  const amount=Number(inputLoanAmount.value);
  setTimeout(function()
  {
    if(amount>0&&currentAccount.movements.some(mov=>mov>=amount*0.1))
    {
      currentAccount.movements.push(amount);
      updateUI(currentAccount);
    }
  },3000
)
})

//every method
// console.log(movements.every(Element=>Element>-400));


