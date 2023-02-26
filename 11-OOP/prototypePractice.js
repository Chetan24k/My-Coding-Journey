const person=function(firstName, birthYear)//construtor function 
{
    this.fname=firstName;
    this.by=birthYear;
}

let chetanObj=new person("chetan",1999);
let manasviObj=new person("manasvi",2000);

chetanObj.pin = 400521;
console.log(chetanObj);
console.log(manasviObj);
person.prototype.calculateAge = function (currentYear) {
  return currentYear - this.by;
};
console.log(chetanObj.calculateAge(2023));
console.log(manasviObj.calculateAge(2023));


person.country="USA";
// console.log(person);
console.log(chetanObj.country);
person.prototype.country="India";
console.log("using dot operator :",chetanObj.country);
chetanObj.__proto__.planet="earth";
console.log("perosns prototype", person.prototype);

console.log('chetan prototype', chetanObj.__proto__);
console.log('manasvi prototype', manasviObj.__proto__);

// chetanObj.__proto__.age=23;
// console.log(chetanObj.__proto__);

let test={name:"chetan"}
console.log(test.__proto__);
// test.__proto__.code="in";
// console.log(test.__proto__);
