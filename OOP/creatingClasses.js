class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    let proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

// this code allows me to build new instances of the Train class
// each obj instance of Train class will have it's own custom properties (color & lightsOn)

// let myFirstTrain = new Train("red", false);
// console.log(myFirstTrain);

// let mySecondTrain = new Train("blue", false);
// let myThirdTrain = new Train("blue", false);
// let train4 = new Train("red", false);

// train4.toggleLights();
// train4.lightsStatus();
// train4.getSelf();
// train4.getPrototype();

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

let train5 = new Train("blue", false);
let highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true && Lights are 100% operational.
