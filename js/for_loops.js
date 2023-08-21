"use strict";
(function(){


    // ******* EXERCISE 1 *********
    // Create a file named for_loops.js inside the js directory and link it to your loops.html file.


    // ******* EXERCISE 2 *********
    // Create a function named showMultiplicationTable that accepts a number and console.logs
    // the multiplication table for that number (just multiply by the numbers 1 through 10)

    function showMultiplicationTable(num){
        // ****** FOR LOOP ******
        // for (let i = 1; i <= 10 ; i++) {
        //     console.log(`${num} x ${i} = ${num * i}`);
        // }

        // ****** WHILE LOOP ******
        let i = 1;
        while (i <= 10){
            console.log(`${num} x ${i} = ${num * i}`);
            i++;
        }
    }
    showMultiplicationTable(7);

    console.log("***************************");

    // ******* EXERCISE 3 *********
    // Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and
    // output to the console whether each number is odd or even.




        function randomOddEven(){
            for (let i = 1; i <= 10; i++){
                let randomNum = Math.floor(Math.random() * (201 - 20) + 1);
                if (randomNum %2 === 0){
                    console.log(`${randomNum} is even.`);
                } else {
                    console.log(`${randomNum} is odd.`);
                }
            }
        }

        randomOddEven();

    console.log("***************************");

    // ******* EXERCISE 4 *********
    // Create a for loop that uses console.log to create the output shown below.

    // 1
    // 22
    // 333
    // 4444
    // 55555
    // 666666
    // 7777777
    // 88888888
    // 999999999

    function pyramid(){
        // let order = "";
        for (let i = 1; i < 10; i++) {
            // SETTING AN EMPTY STRING VARIABLE;
            let order = "";
            // SETS THE FIRST DIGIT IN EACH ITERATION;
            order += i;
                // NESTED FOR LOOP WILL CONTINUE TO ITERATE AS LONG AS j IS LESS THAN i;
                for (let j = 1; j < i; j++) {
                    order += i;
                }
            console.log(order);
        }
    }

    pyramid();


    console.log("***************************");

    // ******* EXERCISE 5 *********
    // Create a for loop that uses console.log to create the output shown below.
    // 100
    // 95
    // 90
    // 85
    // 80
    // 75
    // 70
    // 65
    // 60
    // 55
    // 50
    // 45
    // 40
    // 35
    // 30
    // 25
    // 20
    // 15
    // 10
    // 5

    function countFives(){
        for (let i = 100; i >= 5; i-=5) {
            console.log(i);
        }
    }
    countFives();

})();