// comparing var let & const

// ____________________________________
// var Example

// 1. We CAN access a var variable before initialization ...
// ... as long as the var variable IS EVENTUALLY INITIALIZED
// ... ANYWHERE in our code
// console.log(user);

// 2. We CAN declare and redeclare the same var variable without errors
// var user = "Mary";
// var user = "Joanna";
// var user = "Mark";

// console.log(user);

// var user;

// ____________________________________
//let Example

// 1. We CANNOT access a let variable before we declare it
// console.log(user); //Error
// let user;

// 2. We CAN declare an unassigned variable with let
// let user;
// console.log(user); //undefined

// 3. We CAN'T redeclare a let variable
// let user = "Anna";

// 4. But we CAN re-assign it
// user = "Anna";

// console.log(user); //Anna

// ____________________________________
//const Example

// 1. The const variable MUST BE INITIALIZED
// console.log(user); // Error!
// const user;

// 2. We CAN'T access the const variable before initialization
// console.log(user); // Unexpected token error
// const user = "Andrew";

// 3. We CAN'T redeclare a const variable
// user = "Anna";

//         var   |  let   |  const
// Lenient<----------------------->Strict

// Testing

//__________________________________________
// var globalVar = 77;

// function scopeTest() {
//   var localVar = 88;
// }

// console.log(localVar); // ReferenceError: localVar is not defined

//__________________________________________
// function meal(animal) {
//   animal.food = animal.food + 10;
// }

// var dog = {
//   food: 10,
// };
// meal(dog);
// meal(dog);

// console.log(dog.food); // expected response: 30

//__________________________________________
// function two() {
//   return 2;
// }

// function one() {
//   return 1;
// }

// function calculate(initialValue, incrementValue) {
//   return initialValue() + incrementValue() + incrementValue();
// }

// console.log(calculate(two, one)); // expected response 4
