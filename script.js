/** The setup code **/

'use strict';

const prompt = require("prompt-sync")();

function randInt(min, max, inclusive = true) {
  if (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;  // included
  else
    return Math.floor(Math.random() * (max - min - 1)) + min + 1;  // not included
}

// Here's an example of getting a random number from 1 to 3
let random_number = randInt(1, 3);

/** Cole's code goes below here **/

let want_to_play = prompt ("Would you like to play? y/n");


if (want_to_play == "y") {
  console.log ("Pick one: Fries, Meatball, or Milkshacke")
}



if (want_to_play == "Fries") {

console.log ("You picked Fries!")

}

if (want_to_play == "Milkshack")  {

console_log ("You picked Mickshack!!")

}



if (want_to_play == "MeatBall")  {

  console_log ("You picked Meatball!!!")

}





