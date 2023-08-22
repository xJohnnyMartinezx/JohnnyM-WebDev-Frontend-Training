"use strict";
(function (){


    // ******* EXERCISE 1 *********
    // Create a file named break_and_continue.js in the js directory.


    // ******* EXERCISE 2 *********
    // Prompt the user for an odd number between 1 and 50. Use a loop and a break
    // statement to continue prompting the user if they enter invalid input.

    function userOddOneThroughFifty() {
        for (let i = 1; i <= 50; i++) {
            let userInput = prompt("Enter an odd number between 1 and 50.");
            if (!isNaN(parseInt(userInput)) && userInput % 2 !== 0 && userInput >= 1 && userInput <= 50) {
                break;
            }
        }
    }
    // userOddOneThroughFifty();

    console.log("**************************");

    // ******* EXERCISE 3 *********
    // Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
    function oddUserInput() {
        let userInput = prompt("Enter an odd number between 1 and 50.");
        for (let i = 1; i < 50; i++) {
            if (i % 2 !== 0) {
                if (parseInt(userInput) === i) {
                    continue;
                }
                console.log(i);
            }
        }
    }

    oddUserInput();






















})();