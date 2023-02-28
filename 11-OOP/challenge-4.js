class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
//   accelerate() {
//     this.speed += 20;
//     this.charge -= this.charge * 0.01;
//     console.log(
//       `${this.make} going at ${this.speed} km/h with charge of ${this.charge}%`
//     );
//   }
  brake()
  {
    this.speed -= 5;
    console.log(this.speed);
    }
}
class EVCL extends Car {
  #charge;
  constructor(make, speed,charge) {
    super(make,speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(this.charge);
  }
  accelerate() {
    this.speed += 20;
    this.charge -= this.charge * 0.01;
    console.log(
      `${this.make} going at ${this.speed} km/h with charge of ${this.#charge}%`
    );
    return this;
  }
} 
let Rivian = new EVCL('Rivian',120,23);
Rivian.accelerate();
Rivian.brake();
Rivian.chargeBattery(24);