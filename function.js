// 1. if-else //
const temp = 25; // You can change this value to test different outputs
// Check the temperature and respond accordingly
if (temp > 30) { // Hot if temperature is above 30
   console.log("It's hot.");
} else if (temp >= 20) { // Warm if temperature is between 20 and 30
   console.log("It's warm.");
} else { // Cold if temperature is below 20
   console.log("It's cold.");
}

// 2. switch statement //
const day = "Monday"; // You can change this value to test different outputs
// Check the day and respond accordingly
switch (day) // Start of switch statement
{
   case "Monday": // If day is Monday
       console.log("Start of the week.");
       break;
   case "Friday": // If day is Friday
       console.log("End of the workweek.");
       break;
   default:
       console.log("It's a regular day.");
}

// 3. ternary//
let a = 10;
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5");

// 4.for loop //
for (let i = 1; i <= 3; i++) {
   console.log("Count:", i);
}

// 5. while loop//
let i = 0;
while (i < 3) {
   console.log("Number:", i);
   i++;
}

// 6.do loop//
let i = 0;
do {
   console.log("Iteration:", i);
   i++;
} while (i < 3);

// 7.for in loop//
const obj = { name: "Ashish", age: 25 }; // Sample object
// Iterate over the object's properties using for...in loop
for (let key in obj) // loop through each key in the object
   {
   console.log(key, ":", obj[key]); // print each key-value pair
}

// 8.for of//
let a = [1, 2, 3, 4, 5]; // Sample array
// Iterate over the array using for...of loop
for (let val of a) // loop through each value in the array
{
   console.log(val); // print each value
}