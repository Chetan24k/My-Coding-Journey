class Car
{
    count=0;
    constructor(make,speed)
    {
        this.make=make,
        this.speed=speed
    }
    get speedUS()
    {
        return this.speed/1.6;
    }
    set speedUS(currentSpeed)
    {
       this.speed=currentSpeed*1.6;
    }

}
let ford=new Car("ford",120);
let lux=new Car("lux",30);
console.log(ford.speedUS);
ford.speedUS=50;
ford.count=2;
console.log(ford.speed);
console.log(ford.count);
console.log(lux.count);