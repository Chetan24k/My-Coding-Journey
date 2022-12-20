
'use strict';
let mark={
    fullName:'mark miller',
    weight:78,
    height:1.69,
    calcBMI:function(){
         this.BMI=this.weight/(this.height*this.height);
         return this.BMI;

    }
}
const john={
    fullName:'john smith',
    weight:92,
    height:1.95,
    calcBMI:function(){
        this.BMI=this.weight/(this.height*this.height);
        return this.BMI;
    }
}
john.calcBMI();
mark.calcBMI();
// console.log(john.BMI);
// console.log(mark.calcBMI());

john.BMI>mark.BMI?console.log(`john has higher bmi`):console.log(`mark has higher bmi`);