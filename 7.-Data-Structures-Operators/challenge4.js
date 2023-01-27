document.body.append(document.createElement('textarea')); 
  document.body.append(document.createElement('button'));
  document.querySelector("textarea").value=`underscore_case 
  first_name 
 Some_Variable  
   calculate_AGE 
 delayed_departure`;
// console.log(input);


let data=document.querySelector("button").addEventListener("click",function()
{
    let input=document.querySelector("textarea").value;
// console.log(input);

input=input.toLowerCase();
// input=input.trim();
// console.log(input);
let splitArray=input.split("\n");
// console.log(splitArray);
let resArray=[];
let i=1;
for (const curr of splitArray ) {
    
    let str=curr.trim();
    let c= str.replace("_"+str[str.indexOf("_")+1],str[str.indexOf("_")+1].toUpperCase());
    c=c.padEnd(20," ");
    c=c+"✅".repeat(i++);
    resArray.push(c);
    }
let res=resArray.join("\n");
console.log(res);

});
