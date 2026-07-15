//  it's important to know that
// a for of loop cannot work on an object directly,
// since an object is not iterable.

// Test Example:
/* const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}

Expected Result: 
Error on line 6:
for(prop of car) {
            ^

TypeError: car is not iterable */

// Arrays are iterable
const colors = ["red", "orange", "yellow"];
for (var color of colors) {
  console.log(color);
}
/* expected result:
red
orange
yellow */

// Strings, Sets, and Maps are also iterable
// a for-of loop can be run on arrays to 'loop over objects'
// three built-in methods: Object.keys(), Object.values(), and Object.entries().

/*Object is the object you want to loop over:

Object.keys() method:
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']

Expected result:
[ 'speed', 'color' ]

Why this result? Run the Object.keys() >> pass it in the car2 object >> 
the Returned Value is an ARRAY of strings 
(where each string is a property key of the properties in the car2 object)

*/

/* Object.values() method:
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); 

Expected Result:
[300, 'yellow']

Why this result? Same logic as before you run the method through the obeject car3
the returned value is the actual values assiged to the properties contained in car3

*/

/*Object.entries method
const car4 = {
    speed: 400;
    color: 'magenta';
}
console.log(Object.entries(car4));

Expected Result:
[['speed', 400],['color', 'magenta']]

Why this result? It returns both keys and values of the object. 
These types of arrays are called 2-member arrays nested inside an array. So...
an ARRAY of ARRAYs

*/

// Example:
var clothingItem = {
  price: 50,
  color: "beige",
  material: "cotton",
  season: "autumn",
};

for (const key of Object.keys(clothingItem)) {
  console.log(key, ":", clothingItem[key]);
}

// Another Example:
function testBracketsDynamicAccess() {
  let dynamicKey;
  if (Math.random() > 0.5) {
    dynamicKey = "speed";
  } else {
    dynamicKey = "color";
  }

  let drone = {
    speed: 15,
    color: "orange",
  };

  console.log(drone[dynamicKey]);
}

testBracketsDynamicAccess();

const car = {
  engine: true,
  steering: true,
  //   speed: "slow",
};
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

// console.log("----- for-in is unreliable -----");
for (prop in sportsCar) {
  console.log("hmm...", prop);
}

// console.log("hmm...", "Iterating over object AND its prototype!");

// console.log("----- for-of is reliable -----");
for (prop of Object.keys(sportsCar)) {
  console.log("bullseye!", prop + ":" + sportsCar[prop]);
}

// console.log("bullseye!", "Iterating over object's OWN PROPERTIES only");

// Template Literals
let noMultiLine = "No multi-line strings in ES5";
console.log("Did you know? " + noMultiLine);

let multiLine = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible
`;
console.log(multiLine);

let first = `He said, "Don't you know? ES6, it's got some great features!"`;
let second = `"Wouldn't you want to learn more?", he asked.`;

console.log(`${first} - and I got curious. ${second}`);

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (var items of dairy) {
    console.log(items);
  }
}

logDairy();

const animal = {
  canJump: true,
};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (prop of Object.keys(bird)) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

birdCan();

function animalCan() {
  for (prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();

// Spread Operator_________________________
let top3 = ["The Colosseum", "Trevi Fountain", "The Vatican City"];

function showItinerary(place1, place2, place3) {
  console.log(`Visit ${place1}`);
  console.log(`Then visit ${place2}`);
  console.log(`Finish with a visit to ${place3}`);
}

// The ... is the code that says to spread the list
// through the function in designated places
showItinerary(...top3);

// You can go out of order, depending on the designation
// of the parameters and arguments passed

/*
let top4 = [
"Your Mom", 
"My Mom", 
"Ice Cream Shoppe", 
"Liquor Store"];

function showItinerary(place1, place2, place3, place4) {
  console.log(`Visit ${place1}`);
  console.log(`Visit ${place4}`);
  console.log(`Then visit ${place2}`);
  console.log(`Finish with a visit to ${place3}`);
}

showItinerary(...top4);

Expected Result:
Visit Your Mom
Visit Liquor Store
Then visit My Mom
Finish with a visit to Ice Cream Shoppe
*/

// Rest Operator_________________________
// used to build a smaller box and pack items into it

const top7 = [
  "A Caribbean Coral Reef",
  "The Redwood National Forest, California",
  "A Chaotic Restaurant Kitchen During the Dinner Rush",
  "A Massive, Industrial 3D Printing Lab",
  "An Electric Bike Cruise Down St. George Street",
  "A Cold, Humid Server Farm",
  "A High-End Claw Machine Arcade in Tokyo",
];

// Destructuring via rest operator
const [] = top7;
const [primary, secondary, third, ...secondVisit] = top7;
// extracted contents of the top7 array into 4 variables
// the ...secondVisit is a sub-array of the first array

// the rest operator (using the ...secondVisit) gives us the string primitives
// what is left over of the source array as a sub-array

// Can use a rest operator in functions:
// rest parameter MUST BE the LAST parameter in a function
function addTaxToPrices(taxRate, ...itemsBought) {
  return itemsBought.map((item) => taxRate * item);
}
// map is a method used to call a defined callback function on each element of an array
let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
console.log(shoppingCart);
// expected answer: [ 50.6, 97.9, 38.5, 86.9 ]

const [one, ...rest] = [1, 2, 3, 4];
console.log(one); // 1
console.log(rest); // [ 2, 3, 4 ]

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); //6

// concatenate arrays with spread operator__________________________________________
const fruits = ["apple", "pear", "plum"];
const berries = ["blueberry", "strawberry"];
const fruitsAndBerries = [...fruits, ...berries]; //concatination happening here
console.log(fruitsAndBerries); // [ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]

// join objects
const flying = { wings: 2 };
const carr = { wheels: 4 };
const flyingCar = { ...flying, ...carr };
console.log(flyingCar); //{ wings: 2, wheels: 4 }

// adding new members to the array - not using PUSH
let veggies = ["onion", "parsley"];
veggies = [...veggies, "carrot", "beetroot"];
console.log(veggies); //[ 'onion', 'parsley', 'carrot', 'beetroot' ]

//string to array with spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //[ 'H', 'e', 'l', 'l', 'o' ]

//copy object to array to into a separate one
// object
const carr1 = {
  speed: 200,
  color: "yellow",
};
const carr2 = { ...carr1 };

carr1.speed = 201;

console.log(carr1.speed, carr2.speed); //201 200

// array
const fruits1 = ["apples", "pears"];
const fruits2 = [...fruits1];
fruits1.pop();
console.log(fruits1, "not", fruits2); //[ 'apples' ] not [ 'apples', 'pears' ]
