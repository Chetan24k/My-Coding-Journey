let email="hello@chetan.io";
let login="  hello@Chetan.io \n";
let cleanEmail=function(str)
{
       str=str.toLowerCase();
        str=str.trim();
        return str;
}
console.log(email===cleanEmail(login));
cleanEmail(login);
// to replace the chars in strig whith another chars
let cost='22,40$';
console.log(cost.replace('$','₹').replace(',','.'));//we can replace more
//chars by chaining the methods


//true false methods for strings
console.log(cost.includes(22));
console.log(email.endsWith('io'));
console.log(email.startsWith('hello'));