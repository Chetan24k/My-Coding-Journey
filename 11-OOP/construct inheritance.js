const person=function(firstName, birthYear)//construtor function 
{
    this.fname=firstName;
    this.by=birthYear;
}
person.prototype.calcAge=function(currentYear)
{
    return currentYear-this.by;
}

let student=function(firstName, birthYear,course)
{
   person.call(this,firstName,birthYear);
    this.course=course;
}

student.prototype=Object.create(person.prototype);

student.prototype.intro=function()
{
    console.log("hello everyone ❤");
}
let chetan=new student("chetan",1999,"coe");
console.log(chetan.__proto__);

