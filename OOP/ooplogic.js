
// Things to think about when writing OOPs

// What should go into the base class of <Object>? In other words, what will all the sub-classes inherit from the base class? 
// What are the specific properties and methods that separate each class from others? 
// Generally, how will my classes relate to one another?

//The plan is as follows: 
// 1. The Animal class's constructor will have two properties: color and energy 
// 2. The Animal class's prototype will have three methods: isActive(), sleep(), and getColor(). 
// 3. The isActive() method, whenever run, will lower the value of energy until it hits 0. The isActive() method will also report the updated value of energy. If energy is at zero, the animal object will immediately go to sleep, by invoking the sleep() method based on the said condition. 
// 4. The getColor() method will just console log the value in the color property. 
// 5. The Cat class will inherit from Animal, with the additional sound, canJumpHigh, and canClimbTrees properties specific to the Cat class. It will also have its own makeSound() method. 
// 6. The Bird class will also inherit from Animal, but its own specific properties will be quite different from Cat. Namely, the Bird class will have the sound and the canFly properties, and the makeSound method too. 
// 7. The HouseCat class will extend the Cat class, and it will have its own houseCatSound as its special property. Additionally, it will override the makeSound() method from the Cat class, but it will do so in an interesting way. If the makeSound() method, on invocation, receives a single option argument - set to true, then it will run super.makeSound() - in other words, run the code from the parent class (Cat) with the addition of running the console.log(this.houseCatSound). Effectively, this means that the makeSound() method on the HouseCat class's instance object will have two separate behaviors, based on whether we pass it true or false. 
// 8. The Tiger class will also inherit from Cat, and it will come with its own tigerSound property, while the rest of the behavior will be pretty much the same as in the HouseCat class. 
// 9. Finally, the Parrot class will extend the Bird class, with its own canTalk property, and its own makeSound() method, working with two conditionals: one that checks if the value of true was passed to makeSound during invocation, and another that checks the value stored inside this.canTalk property.  

// Object for Animal
class Animal {
    constructor (color = "yellow", energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy <= 0) {
            this.energy = 0;
            this.sleep();
        }
    }

    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }

    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = "purr", canJumpHigh = "true", canClimbTrees = "true", color, energy){
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }

    makeSound() {
        console.log(this.sound)
    }
}

class Bird extends Animal {
    constructor(sound = "chirp", canFly = "true", color, energy){
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    
    makeSound() {
        console.log(this.sound)
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        } 
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound
    }
        makeSound(option){
        if(option){
            super.makeSound();
        } 
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = "false", sound, canFly, color, energy){
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }

    makeSound(option){
        if(option){
            super.makeSound();
        } if(this.canTalk){
            console.log("I'm a talking parrot!");
        }
    }
}

var polly = new Parrot(true);
var fiji = new Parrot(false);

polly.makeSound(true);
fiji.makeSound(true);

polly.color;
polly.energy;

polly.isActive();

var penguin = new Bird("shriek", false, "black and white", 200);
penguin;

penguin.sound;
penguin.canFly;
penguin.color;
penguin.energy;
penguin.isActive();

var leo = new HouseCat();
leo.makeSound(false);
leo.makeSound(true);

var cuddles = new Tiger();
cuddles.makeSound(false);
cuddles.makeSound(true);

