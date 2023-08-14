// Exercises
// ********* 1. *************
// For each of the following code blocks, read the code and predict what the result of evaluating it would be, then execute the statement(s) in the Chrome console.
//
//
let a = 1;
// CURRENT VALUE FOR a IS 1;
console.log("a " + a);
let b = a++;
// AFTER LINE 9 CURRENT VALUE FOR a IS 2, BUT BECAUSE OF POST INCREMENTING THE VALUE OF b IS 1. (INCREMENTATION IS OCCURRING AFTER THE ASSIGNMENT. THE VALUE OF a HAS BEEN ASSIGNED TO b BEFORE INCREMENTING HAS TAKEN PLACE.)
console.log("a " + a);
console.log("b " + b);
let c = ++a;
console.log("a " + a); // a EQUALS 1 BECAUSE IT'S BEEN INCREMENTED AGAIN.
console.log("b " + b); // b REMAINS AT 1 (KEEPS ORIGINAL ASSIGNMENT AT LINE 9)
console.log("c " + c); // c EQUALS 3 BECAUSE IT HAS BEEN ASSIGNED a.
// // what is the value of a, b, and c?
// a = 3
// b = 1
// c = 3
// **************************************************************

var d = "hello";
var e = false;

d++; // NaN
e++; // 1

console.log(d++);
console.log(e++);
// **************************************************************

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// NaN BECAUSE perplexed CANNOT BE ADDED TO 2.
console.log(perplexed + 2);

// **************************************************************

var price = 2.7;
price.toFixed(2);
// 2.70;
console.log(price.toFixed(2));
// **************************************************************

// var price2 = "2.7";
// // price2.toFixed(2);
// // NaN
// console.log(price2.toFixed(2)) //COMPILE ERROR price2.toFixed is not a function
// **************************************************************

isNaN(0);
// FALSE
console.log(isNaN(0));
// **************************************************************

isNaN(1);
// FALSE
console.log(isNaN(1));
// **************************************************************

isNaN("");
// FALSE BECAUSE JS INTERPRETS AN EMPTY STRING AS A 0;
console.log(isNaN(""));
// **************************************************************

isNaN("string");
// TRUE
console.log(isNaN("string"));
// **************************************************************

isNaN("0")
// FALSE
console.log(isNaN("0"));
// **************************************************************

// isNaN("1")
// FALSE
console.log(isNaN("1"));
// **************************************************************

// isNaN("3.145")
// FAlSE
console.log(isNaN("3.145"));
// **************************************************************

isNaN(Number.MAX_VALUE)
// FALSE
console.log(isNaN(Number.MAX_VALUE));
// **************************************************************

isNaN(Infinity)
// FALSE
console.log(isNaN(Infinity));
// **************************************************************

isNaN("true");
// TRUE
console.log(isNaN("true"));
// **************************************************************

isNaN(true);
// FALSE
console.log(isNaN(true));
// **************************************************************

isNaN("false");
// TRUE
console.log(isNaN("false"));
// **************************************************************

isNaN(false);
// FALSE
console.log(isNaN(false));
// **************************************************************

// // to illustrate why the isNaN() function is needed:
NaN == NaN
//
console.log(NaN == NaN);
// **************************************************************

!true
// FALSE
console.log("*****************************************")
console.log(!true);
// **************************************************************

!false
// TRUE
console.log(!false);
// **************************************************************

!!true
// TRUE
console.log(!!true);
// **************************************************************

!!false
// FALSE
console.log(!!false);
// **************************************************************

!!0
// FALSE
console.log(!!0);
// **************************************************************

!!-0
// FALSE
console.log(!!-0);
// **************************************************************

!!1
// TRUE
console.log(!!1);
// **************************************************************

!!-1
// TRUE
console.log(!!-1);
// **************************************************************

!!0.1
// TRUE
console.log(!!0.1);
// **************************************************************

!!"hello"
// TRUE
console.log(!!"hello");
// **************************************************************

!!""
// FALSE
console.log(!!"");
// **************************************************************

!!''
// FALSE
console.log(!!'');
// **************************************************************

!!"false"
// TRUE
console.log(!!"false");
// **************************************************************

!!"0"
// TRUE
console.log(!!"0");
console.log("***********************************************")

// ************************************************
// ********************* 2. ***********************
// ************************************************

// Execute the following statement in the Chrome JavaScript console and then follow the directions below.
//
//
    var sample = "Hello Codeup";

//     Use .length to find the number of characters in the string.
        let numOfChar = sample.length;
        console.log(numOfChar);
//     Try to make the sample string all upper or all lower case.
        let low = sample.toLowerCase();
        let high = sample.toUpperCase();
        console.log(low);
        console.log(high);
//     Update the variable sample via concatenation so that it contains "Hello Codeup Students".
        let addStudents = sample + " Students";
        console.log(addStudents);
//     Replace "Students" with "Class".
        let changeUp = sample.replace("Codeup", "Students");
        console.log(changeUp);
//     Find the index of "c" using .indexOf(). What do you observe?
        let cIndex = sample.indexOf("c");
        console.log(cIndex); // PRINTS -1 BECAUSE LOWERCASE c DOES NOT EXIST IN sample STRING
//     Find the index of "C" using .indexOf().
        let indexC = sample.indexOf("C");
        console.log(indexC);
//     Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
        let retrieveCodeup = sample.substring(6, 12);
        console.log(retrieveCodeup);
