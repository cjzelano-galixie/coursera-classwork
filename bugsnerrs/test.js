//this was a test for the unit
try {
  console.log(a + b);
} catch (err) {
  console.log(err);
  console.log("There was an error");
  console.log("The error was saved in the error log");
}
console.log("My program does not stop");

//this was a test for the unit
console.log(a + b);
console.log("This line is never reached");

throw new ReferenceError();

//this was a test for the unit
try {
  throw new ReferenceError();
} catch (err) {
  console.log(err);
  console.log("There was a Reference Error");
}
console.log("My program does not stop");
