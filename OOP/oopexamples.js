const purchase1 = {
  shoes: 100,
  stateTax: 1.2,
  totalPrice: function () {
    let calculation = purchase1.shoes * purchase1.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase1.totalPrice(); //120

// cool way to update and make it universal in case objects have similar functions
// totalPrice: function () {
//     let calculation = this.shoes * this.stateTax;
//     console.log("Total price:", calculation);
//   },
// by using "this", it is referring to the object the method sits in

const purchase2 = {
  shoes: 50,
  stateTax: 1.2,
  //   totalPrice: function () {
  //     let calculation = purchase2.shoes * purchase2.stateTax;
  //     console.log("Total price:", calculation);
  //   }, Below is the improved method using "this"
  totalPrice: function () {
    let calculation = this.shoes * this.stateTax;
    console.log("Total price:", calculation);
  },
};
purchase2.totalPrice(); //60

let shoes = 100;
let stateTax = 1.2;
function totalPrice(shoes, tax) {
  return shoes * tax;
}

let toPay = totalPrice(shoes, stateTax);
console.log("$", toPay); //$ 120

//putting in 2 similar objects is wasteful and its better to use an
//object template or a class

// _________________CLASSES_____________________
class Car {
  // class variables are capitalized
  constructor(color, speed) {
    // accepts as many parameters as needed
    // role is to assign the past parameters to the future objects properties
    this.color = color;
    this.speed = speed;
  }
  turboOn() {
    console.log("turbo is on!");
  }
}

const car1 = new Car("red", 120);
car1.turboOn(); //turbo is on!

// OOP helps developers to mimicthe relationship btwn opjects in the real world
// 1 Allows you to write modular code
// 2 Makes your code more flexible
// 3 Makes your code reusable

// 4 Fundamentals
// Inheritance, Encapsulation, Abstraction and Polymorphism

class Animal {
  /*...class code here...*/
}
let myDog = Object.create(Animal);
console.log(Animal);
// this is using the Object.create() method

class Animal {
  /*...class code here...*/
}
let myDog = new Animal();
console.log(Animal);
// this is using the 'new' keyword

//  Objects is that they exist in a hierarchical structure,
// meaning that the original base or super class for everything is
// the Object class, and all objects derive from this class.

//________________Inheritance________________
// You have the base or super-class
// you have sub-classes that inherit the properties of the base class
// you coudl have sub-sub-classes that inherit properties from the sub-class

class Animal {
  /*...class code here...*/
}
class Mammal extends Animal {
  /*...class code here...*/
}
class Elephant extends Mammal {
  /*...class code here...*/
}
// 'extends' is the keyword here that sets up the inheritance relation

// Prototype = original model with other formas are developed.
let bird = {
  hasWings: true,
  canFly: true,
  hasFeathers: true,
};

let eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings: ", eagle1.hasWings); //true
console.log("eagle1 can fly: ", eagle1.canFly); //true
console.log("eagle1 has feathers: ", eagle1.hasFeathers); //true

let eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings); //true

let penguin1 = Object.create(bird);
penguin1.canFly = false; //object can access the canFly property and adjust it
console.log("penguin1: ", penguin1);
console.log("penguin1 has wings: ", penguin1.hasWings); //true
console.log("penguin1 can fly: ", penguin1.canFly); //false
console.log("penguin1 has feathers: ", penguin1.hasFeathers); //true

//________________Encapsulation________________
// Makes code hidden from other users, they dont have to know how my
// code works in order to consume the code
"abc".toUpperCase();

// no one nor myself would need to worry or waste time thinking about how
// the toUpperCase() method works, all we want to do is use it.

//________________Abstraction________________
// write code in a more generalized way:
// 1 Abstraction is about extracting the concept of your intent, rather than
// dealing with specific manifestation of that concept.
// 2 Encapsulation is about you not having access to or not being concerned
// with how some implementations works internally.

//________________Polymorphism________________
// multiple forms, something that can take many shapes.
// Door bell versus a Bike bell, both can be rung, but they are for diff purposes/intentions
const bicycle = {
  bell: function () {
    return "Ring, ring! Wach out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};

function ringTheBell(thing) {
  console.log(thing.bell());
}

// bicycle.bell();
// door.bell();
ringTheBell(bicycle);
ringTheBell(door);

// polymorphism is useful because it allows devs to build objects that can share
// functionality but override it as needed

// another example of polym. is the concat() method:
"abc".concat("def"); // 'abcdef'
["abc"].concat(["def"]); // ['abc','def']
["abc"] + ["def"]; // 'abc,def'

class Bird {
  useWings() {
    console.log("Flying!");
  }
}

class Eagle extends Bird {
  useWings() {
    super.useWings();
    // 'super' keyword calls methods from parent class in this case it invokes useWings
    // this adds and extends the method
    console.log("Barely flapping!");
  }
}

class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
  // dont need to use 'super' here because we are not extending the useWings
  // we are making it have it's own implementation.
}

let baldEagle = new Eagle();
let kingPenguin = new Penguin();

baldEagle.useWings(); // Flying! Barely flapping!
kingPenguin.useWings(); // Diving!

//________________Constructors________________
// JavaScript has a number of built-in object types, such as:
//  Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, and many more.
// These objects are commonly known as "native objects."

// there are objects with constructors like Date() and some without like Math()
// there are built-in or custom constructors

function Icecream(flavor) {
  this.flavor = flavor;
  this.meltIt = function () {
    console.log(`The ${this.flavor} icecream has melted`);
  };
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream;
appleIcecream;

// Best Practises & Performance
let apple = new String("apple");
apple;

let pear = "pear";
pear;

// the difference here is that pear is a string literal, a vartiable. Apple is variable that is an object.
// The string literal is a primitive value and will be more performant than apple.
// You cannot compare objects in the same way as you can a primitive value.
// new String('plum') === new String('plum') returns false
// "plum" === "plum" returns true.
// you get false with the object compare because it is not the values that you pass to the constructor
// that are being compared but the memory address where the objects are saved.

// Its better to not use constructors when constructing plain, regular objects.

//________________Alternative Patterns and Literals________________
// Instead of using 'new Object' you should use object literal syntax {}
// Regular Expressions or RegExp is a built-in object used to patter-match strings.
// you could build an instance of RegExp constructor using new RegExp() OR
// you can use a pattern literal instead of RegExp, example below:

"abcd".match(/d/); // ['d', index: 3, input: 'abcd', groups: undefined]
"abcd".match(/a/); // ['a', index: 0, input: 'abcd', groups: undefined]

// Instead of using Array, Function, RegExp constructors you should use their array literal,
// function literal, and pattern literal varieties: [], () {}, and /()/

// There are a few times when you'll want to use constructors for built-in type objects:
new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();

//________________Default Parameters________________
function noDefaultParams(number) {
  console.log("Result:", number * number);
}
noDefaultParams(); // NaN

function withDefaultParams(number = 10) {
  console.log("Result:", number * number);
}

withDefaultParams(); // 100

class NoDefaultParams {
  constructor(num1, num2, num3, string1, bool1) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1, this.num2, this.num3);
      return;
    }
    console.log("The value of bool1 is incorrect");
  }
}

let fail = new NoDefaultParams(1, 2, 3, false);
fail.calculate(); // "The value of bool1 is incorrect"

class WithDefaultParams {
  constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
    this.num1 = num1;
    this.num2 = num2;
    this.num3 = num3;
    this.string1 = string1;
    this.bool1 = bool1;
  }
  calculate() {
    if (this.bool1) {
      console.log(this.string1, this.num1, this.num2, this.num3);
      return;
    }
    console.log("The value of bool1 is incorrect");
  }
}

let better = new WithDefaultParams();
better.calculate(); // Result: 3
