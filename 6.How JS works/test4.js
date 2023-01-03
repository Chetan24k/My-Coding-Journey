var firstName="chetan";
const chetan={
    firstName:'chetan',
    year:1991,
    calcAge:function()
    {
        // console.log(this);
        // console.log(2037-this.year);
        const self=this;
        const isMillenial=function()
        {
            
            console.log(self);
            console.log(self.year>=1981&&self.year<=1996);
        };
        isMillenial();
    },
    greet:()=>console.log(`hey ${this.firstName}`)

}
chetan.calcAge();