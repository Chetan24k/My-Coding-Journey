const person=function(firstName, birthYear)//construtor function 
{
    this.fname=firstName;
    this.by=birthYear;
}

person.prototype.calculateAge=function(currentYear)
{
    return currentYear-this.by;
}


let chetanObj=new person("chetan",1999);
console.log(chetanObj.calculateAge());
