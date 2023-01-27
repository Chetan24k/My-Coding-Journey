//split is use dto split the strings and store them in array based on the
//divider strings
//imp : while splitiing we exclude the character upon which make  the split
let str='a+nice+house'
let a=str.split('+');
console.log(a);

let fullName="chetan vijay kharote";
let [firstName,middleName,lastName]=fullName.split(" ");

//opposite of split is join method it joins strings present in array and 
//puts the character in arguments in joined string

let strArray=["my",'name','is','chetan'];
console.log(strArray.join(" "));
console.log(strArray.join('+'));

//capitalize starting letter of each word in array
//chetan vijay kharote==>Chetan Vijay Kharote

let capitalizeName=function(str)
{
    let splitArray=str.split(' ');
    let upperArray=[];
    for (const curr of splitArray) 
    {
        // upperArray.push(curr[0].toUpperCase()+curr.slice(1)); 
        upperArray.push( curr.replace(curr[0],curr[0].toUpperCase()));  
    } 
    console.log(str);
    return upperArray.join(" ");
}
console.log(capitalizeName("chetan vijay kharote"));

//padding the string
let maskCreditCard=function(number)
{
    let str=number.toString();
    let lastFour=str.slice(-4);
    console.log(lastFour.padStart(str.length,'*'));
}
console.log(maskCreditCard(123456));
