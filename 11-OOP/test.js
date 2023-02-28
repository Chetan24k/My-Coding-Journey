class personCl {
  constructor(birthYear, name) {
    this.birthYear = birthYear;
    this.fname = name;
  }

  calcAge(currentYear) {
    console.log(currentYear - this.birthYear);
  }

  // get birthYear()
  // {
  //     console.log(this.birthYear);
  // }
  set fname(fullName) {
    if (fullName.includes(' ')) this._fname = fullName;
    // fullName.includes(" ")&&this.fname=fullName;
    else console.log('not a fullname');
  }
  get fname() {
    console.log(this._fname);
  }
}
class studentCl extends personCl {
  constructor(birthYear, fname, course) {
    super(birthYear, fname);
    this.course = course;
  }
}
let student1 = new studentCl(1999, 'ck', 'cs');
// student1.calcAge(2010);
console.log(student1);