// FIRST PART OF EXERCISE

"use strict";
console.log("Hello from external JavaScript");


// SECOND PART OF EXERCISES
// 1)
alert("Welcome to my website!");

// 2)
let userInput = prompt("What's you favorite color?");
alert("No way! " + userInput + " is my favorite color too!");

// 3)
let littleMermaid = prompt("How many days would you like to rent The Little Mermaid for?")

// alert("Okay, your total for this rental is $" + littleMermaid * 3);

let brotherBear = prompt("How many days would you like to rent Brother Bear for?")

// alert("Okay, your total for this rental is $" + brotherBear * 3);

let herc = prompt("How many days would you like to rent Hercules for?")

// alert("Okay, your total for this rental is $" + herc * 3);

alert("So your overall total for all three rentals is $" + (littleMermaid * 3 + brotherBear * 3 + herc * 3));

// ************************

let google = prompt("How many hours did you work for Google this week?");

let amz = prompt("How many hours did you work for Amazon this week?");

let fb = prompt("How many hours did you work for Facebook this week?");

alert("So your overall total pay for this week is $" + (google * 400 + amz * 380 + fb * 350));

// ************************

let preMem = prompt( "Hello, are you a premium member?");

// let offerExp = true;
let offerExp = false;

if (preMem === "yes") {
    alert("Perfect, you have access to all unexpired offers.");
} else if (preMem === "no") {
    let numOfItems = prompt("Hello, how many items are you purchasing?");
    if (numOfItems > 2 && offerExp === false) {
        alert("Perfect you qualify for this offer")
    } else if (offerExp === true){
        alert("Sorry, offer is expired.");
    }else {
        alert("Sorry, non-premium member need to purchase a minimum of three items to take advantage of any unexpired offers.");
    }
}

