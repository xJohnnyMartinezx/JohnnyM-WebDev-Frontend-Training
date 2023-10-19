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




    // // let result = '';
    // let i = 0;
    //
    // do {
    //     // i = i + 1;
    //     // result = result + i;
    //     console.log(i);
    //     i+=5; // THIS CALCULATION IS HAPPENING, BUT WILL NOT SEE IT IN THE CONSOLE, UNTIL THE NEXT ITERATION.
    //           // BECAUSE ON THE SECOND ITERATION i IS NOW EQUAL TO 5;
    // } while (i < 0);
















})();