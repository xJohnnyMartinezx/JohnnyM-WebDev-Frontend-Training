"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// ******** EXERCISE 1 *********
// Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
function isTrue(input){
    return input === true;
}

// ******** EXERCISE 2 *********
// Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
function isFalse(input){
    return input === false;
}

// ******** EXERCISE 3 *********
// Define a function named not that takes in any input and returns the boolean opposite of the provided input.
function not(input){
    return !input;
}