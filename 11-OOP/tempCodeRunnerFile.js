class personCl{
    constructor(birthYear,name)
    {
        this.birthYear=birthYear;
        this.fname=name;
    }

    calcAge(currentYear)
    {
        console.log(currentYear-this.birthYear);
    }

    // get birthYear()
    // {
    //     console.log(this.birthYear);
    // }
    set fname(fullName)
    {
        if(fullName.includes(" ")) this._fname=fullName;
        // fullName.includes(" ")&&this.fname=fullName;
        else console.log("not a fullname");
    }
    get fname()
    {
        console.log( this._fname);
    }

}

let alex=new personCl(1988,"alex perira");
console.log(alex);
alex.fname="chetan kharote";
console.log(alex.fname);