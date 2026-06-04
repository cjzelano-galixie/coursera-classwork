//Objectives
//Create and use functions in JavaScript to perform specific tasks, ensuring modular and reusable code.
//Dynamically style console messages using template literals and the %c format in console.log.
//Apply conditional logic with if-else statements to handle different scenarios within functions.

//Task 1 Create a Styled Console Log Message Generator
function consoleStyler(color, background, fontSize, txt) {
  var message = "%c" + txt;
  var style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;
  console.log(message, style);
}

// Task 2: Create a Celebratory Message Generator
function celebrateStyler(reason) {
  var fontStyle = "color: tomato; font-size: 50px";
  if (reason == "birthday") {
    console.log(`%cHappy birthday`, fontStyle);
  } else if (reason == "champions") {
    console.log(`%cCongrats on the title!`, fontStyle);
  } else {
    console.log(reason, fontStyle);
  }
}

// Task 3: Invoke the Functions
consoleStyler("#1d5c63", "#ede6db", "40px", "Congrats!");
celebrateStyler("birthday");

// Task 4: Combine the Functions into a New Function
function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

styleAndCelebrate("ef7c8e", "fae8e0", "30px", "You made it!", "champions");

// Expected values:
// Congrats!
// Happy birthday
// You made it!
// Congrats on the title!
