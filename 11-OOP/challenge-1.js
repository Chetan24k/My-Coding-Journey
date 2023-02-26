function createCar(make,speed)
{
    this.make=make;
    this.speed=speed;
}
createCar.prototype.accelerate=function()
{
    this.speed+=10;
    console.log(this.speed);
}
createCar.prototype.brake=function()
{
    this.speed -=5;
    console.log(this.speed);
}

let bmw=new createCar("bmw",120);
let Mercedes=new createCar("mercedes",95);

bmw.accelerate();
bmw.brake();

Mercedes.accelerate();
Mercedes.brake();

