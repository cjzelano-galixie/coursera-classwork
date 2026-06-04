// // functional programming example

// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;

// function convertCurrency(amount, rate) {
//   return amount * rate;
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate);

// console.log(currencyTwo);

// //example 2
// console.log(console.log("Hello")); //this is to show the Hello & undefined because its a function in a function, so it will return 2 results.

// //this is how to properly use a function in a function
// function consolelog(val) {
//   console.log(val);
//   return val;
// }

// console.log(consolelog("Hello"));

// // example 3
// function doubleIt(num) {
//   return num * 2;
// }

// console.log(doubleIt(90));

// function objectMaker(val) {
//   return {
//     prop: val,
//   };
// }

// console.log(objectMaker(20));

// let result = objectMaker(doubleIt(5));
// console.log(result);

// // example 4 recursive functions
// function example() {
//   console.log("line one");
//   console.log("line two");
//   console.log("line three");
//   //added later in the example to prove this would be an error, put it outside the function
//   //   example();
// }

// example();

// //another version of the above code
// let counter = 3;
// function example2() {
//   console.log(counter);
//   counter = counter - 1;
//   if (counter === 0) return;
//   example2();
// }

// example2();

// // example 5
// function fib(n) {
//   // Step 1: Define the base case(s) here.
//   // Hint: What is the value of Fibonacci(0) and Fibonacci(1)?
//   if (n === 0) return 0; //best case Fibonacci(0)
//   if (n === 1) return 1; //best case Fibonacci(1)

//   // Step 2: Define the recursive case here.
//   // Hint: Return the sum of Fibonacci(n-1) and Fibonacci(n-2).
//   return fib(n - 1) + fib(n - 2); //recursive case
// }

// console.log(fib(5)); // Expected output: 5
// console.log(fib(10)); // Expected output: 55

// //I am calling a funtion within itself so I get 5 after putting in 5
// //because when n is subtracted by 1 or 2 it becomes a new n that
// //needs to be run through the function again.
// //5-1 = 4 then for 4 you have to do 4-1 = 3(b) + 4-2 = 2(a)
// //5-2 = 3 then for 3 you have to do 3-1 = 2(b) + 3-2 = 1 returns answer 1
// //for n=3(b) you have 3-1 = 2(c) + 3-2 = 1 returns answer 1
// //for n=2(a) you have 2-1 = 1 returns answer 1
// //for n=2(b) you have 2-1 = 1 returns answer 1
// //for n=2(c) you have 2-1 = 1 returns answer 1
// //returns answer 1, 5 times which makes the answer 5
// //this is called a Call Stack?

// // scope it's like a two way glass
// //global scope = code outside function
// //local scope = code inside function & variables inside a function are "scoped"
// var globalVar = "I'm in the global scope";

// function scopeTest() {
//   var localVar = "I'm scoped to the function";
// }

//reading examples FP
//immutable values: variables not modified after their initial assignment
function getTotal(a, b) {
  return a + b;
}
var num1 = 2; //example of immutability / immutable variable
var num2 = 3; //example of immutability / immutable variable

var total = getTotal(num1, num2);

//In functional programming, functions return new values and then use those values
// somewhere else in the code.
function getDistance(mph, h) {
  return mph * h;
}

var mph = 60; //immutable var
var h = 2;
var distance = getDistance(mph, h) + " miles";

console.log(distance); //this is the new value to be used somewhere else in the code

//Object-Oriented Programming: group data & functionality as properties and methods inside objects
var virtualPet = {
  sleepy: true,
  nap: function () {
    this.sleepy = false; //added this.property [this being a keyword that refers to the object] part of the function to test running the nap method to check if the pet is sleepy after a nap
  },
};
console.log(virtualPet.sleepy); //true
virtualPet.nap();
console.log(virtualPet.sleepy); //false

//vocabulary:
//Pure Functions: always produces the exact same result as long as it's given the same values
//Higher-Order Functions: A function that has either one or both of the characteristics:
//1. it accepts other functions as arguments
//2. It returns functions when invoked treating them as values
