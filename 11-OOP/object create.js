let personProto={
    calculateAge(year)
    {
        console.log(this.birthYear);
        console.log(year-this.birthYear);
    },
    // init(birthYear,name)
    // {
    //     this.birthYear=birthYear,
    //     this.name=name
    // }
}

let person={
birthYear:1999,
fname:"chetan"
}



person.__proto__=Object.create(personProto);
console.log(personProto);
console.log(person);

// person.__proto__.pin=123;
// person.init(1999,"chetan");
person.calculateAge(2023);

