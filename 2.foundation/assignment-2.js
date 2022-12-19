let calcTip=function(bill)
{
    let tip=0;
    if(bill>=50&&bill<=300)
    {
        tip=bill+bill*0.15;
    }
    else
    {
        tip=bill+bill*0.2
    }
    return tip;
}
let bills=[30,100,400];
let tips=[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
let total=[bills[0]+calcTip(bills[0]),bills[1]+calcTip(bills[1]),bills[2]+calcTip(bills[2])];
console.log(total);
console.log(tips);
