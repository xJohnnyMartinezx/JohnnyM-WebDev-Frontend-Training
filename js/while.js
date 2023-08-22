"use strict";
(function (){

    // ******* EXERCISE 1 *********
    // Create a file named while.js in the js directory.

    console.log("*********************************");
    // ******* EXERCISE 2 *********
    // Create a while loop that uses console.log() to create the output shown below.

    // 2
    // 4
    // 8
    // 16
    // 32
    // 64
    // 128
    // 256
    // 512
    // 1024
    // 2048
    // 4096
    // 8192
    // 16384
    // 32768
    // 65536

    function printNums(){
        let i = 1;
        while (i < 65536){
            i *= 2;
            console.log(i)
        }
    }
    printNums();




















})();