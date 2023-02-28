class account{
    constructor(owner,currency,pin)
    {
        this.owner=owner;
        this.currency=currency;
        this.pin=pin;
        this.movements=[];
    }
    set deposit(amt)
    {
        this.movements.push(amt);
    }
    // set withdraw()
    // {
    //     this.movements.pop();
    // }

}
let acc1=new account("chetan","$",1234);
acc1.deposit=200;
console.log(acc1.movements);