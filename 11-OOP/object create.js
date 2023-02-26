let personProto={
    calculateAge(year)
    {
        console.log(this.birthYear);
        console.log(year-this.birthYear);
    },
    init(birthYear,name)
    {
        this.birthYear=birthYear,
        this.name=name
    }
}

let person=Object.create(personProto);

person.init(1999,"chetan");
person.calculateAge(2023)

