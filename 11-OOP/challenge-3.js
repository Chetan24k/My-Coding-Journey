function Car(make,speed)
{
    this.make=make;
    this.speed=speed;
}
Car.prototype.accelerate=function()
{
   this.speed+=20;
   this.charge-=this.charge*0.01;
   console.log(`${this.make} going at ${this.speed} km/h with charge of ${this.charge}%`);
}
Car.prototype.brake=function()
{
    this.speed -=5;
    console.log(this.speed);
}

function EV(make,speed,charge)
{
    Car.call(this,make,speed);
    this.charge=charge;
}
EV.prototype=Object.create(Car.prototype);

EV.prototype.chargeBattery=function(chargeTo)
{
   this.charge=chargeTo; 
   console.log(this.charge);
}

let tesla=new EV("TESLA",120,23);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();