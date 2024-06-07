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
  let want_to_play = prompt ("Pick one: Fries, Meatball, or Milkshack");
}



if (want_to_play == "Fries") {



}

if (want_to_play == "Milkshack")  {


}



if (want_to_play == "MeatBall")  {


}





if (want_to_play == "y") {
  let want_to_play = prompt ("Pick one: Fries, Meatball, or Milkshack");
}



let Opponent = randInt(1,3);

"Fries" = 

