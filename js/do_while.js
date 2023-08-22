"use strict";

(function(){

    // ******* EXERCISE 1 *********
    // An ice cream seller can't go home until she sells all of her cones.
    // First write enough code that generates a random number between 50 and 100
    // representing the amount of cones to sell before you start your loop.
    // Inside of the loop your code should generate another random number between 1 and 5,
    // simulating the amount of cones being bought by her clients. Use a do-while loop to log to
    // the console the amount of cones sold to each person.


    // This is how you get a random number between 50 and 100
    let allCones = Math.floor(Math.random() * 50) + 50;
    // This expression will generate a random number between 1 and 5
    console.log(allCones);


    do {
        let amntOfConesPurchased = Math.floor(Math.random() * 5) + 1;
        console.log(`cones sold: ${amntOfConesPurchased}`);
            if (amntOfConesPurchased > allCones) {
                console.log(`Sorry, I only have ${allCones} left, so I can't sell you ${amntOfConesPurchased} cones.`)
            } else {
                allCones -= amntOfConesPurchased;
                console.log(`cones left: ${allCones}`);
            }
    } while (allCones > 0);
    console.log("Yes!!! I've sold all my cones. I can go home now. ");

})();