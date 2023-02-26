class Car
{
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
console.log(ford.speedUS);
ford.speedUS=50;
console.log(ford.speed);