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

// // ******** EXERCISE 1 *********
// // Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
// function isTrue(input) {
//     return input === true;
// }
//
// // ******** EXERCISE 2 *********
// // Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
// function isFalse(input) {
//     return input === false;
// }
//
// // ******** EXERCISE 3 *********
// // Define a function named not that takes in any input and returns the boolean opposite of the provided input.
// function not(input) {
//     return !input;
// }
//
// // ******** EXERCISE 4 ********
// // Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
// function addOne(input) {
//     let num = parseInt(input);
//     if (input === Infinity) {
//         return input;
//     } else if (!isNaN(input)){
//         return num + 1;
//     }
// }
//
// // ******** EXERCISE 5 ********
// // Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true.
// // Any other input should return false for the output.
// function isEven(input) {
//     let num = parseInt(input);
//     return num % 2 === 0;
// }
//
// // ******** EXERCISE 6 ********
// // Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true.
// // If the values are not the same data type or not the same value, return false.
// function isIdentical(input1, input2){
//     return input1 === input2;
// }
//
// // ******** EXERCISE 7 ********
// // Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.
// function isEqual(input1, input2) {
//     return input1 == input2;
// }
//
// // ******** EXERCISE 8 ********
// // Define a function named or that takes in two input arguments. The output returned should be the result of an or operation on both inputs.
// function or(input1, input2) {
//     return input1 || input2;
// }
//
// // ******** EXERCISE 9 ********
// // Define a function named and that takes in two input arguments and returns the result of a logical and operation of both inputs.
// function and(input1, input2){
//     return input1 && input2;
// }
//
// // ******** EXERCISE 10 ********
// // Define a function named concat that takes in two input arguments. If both arguments are strings, then return the concatenated result.
// // If two numbers are provided, then return the string concatenation of each set of numerals.
// function concat(input1, input2) {
//     if (typeof input1 === typeof(String()) && typeof input2 === typeof(String())) {
//         return input1 + input2;
//     } else if (!isNaN(input1) && !isNaN(input2)) {
//         return input1.toString() + input2.toString();
//     }
// }



//  1)
function isTrue(input) {
    return input === true;
}

// 2)
function isFalse(input) {
    return input === false;
}

// 3)
function not(input) {
    return !input;
}

// 4)
function addOne(input) {
    let num = parseInt(input);
    if (input === Infinity) {
        return Infinity;
    } else if (!isNaN(input)){
        return num + 1;
    }
}

// 5)
function isEven(input) {
    let num = parseInt(input);
    // SIMPLIFIED VERSION
    // return num % 2 === 0;
    if (num % 2 === 0 ) {
        return true;
    } else
        return false;
}

// 6)
function isIdentical(input1, input2) {
    return input1 === input2;
}

// 7)
function isEqual(input1, input2){
    return input1 == input2;
}

// 8)
function or(input1, input2) {
    return input1 || input2;
}

// 9)
function and(input1, input2){
    return input1 && input2;
}

// 10)
function concat(input1, input2) {
    if (typeof (input1) === typeof (String()) && typeof (input2) === typeof (String())){
        return input1 + input2;
    } else if (!isNaN(input1) && !isNaN(input2)){
        return input1.toString() + input2.toString();
    }
}



















