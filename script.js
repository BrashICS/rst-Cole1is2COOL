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
  want_to_play = parseInt(prompt ("Select: 1 for Fries, 2 for Meatball, or 3 for Milkshack"));
}



let opponent = randInt(1,3);

if (want_to_play == 1 && opponent == 1) {
  console.log ("The opponent picked Fries!, You Tied!!! Please reset to play again")
}



if (want_to_play == 1 && opponent == 2) {
  console.log ("The opponent picked MEATBALL!, You LOSE!!! Please reset to play again")
}


// sample
if (want_to_play == 1 && opponent == 3) {
  console.log ("The opponent picked MILKSHACK!, You WIN!!! Please reset to play again")
}

//meatball time

if (want_to_play == 2 && opponent == 1) {
  console.log ("The opponent picked FRIES!, You WIN!!! Please reset to play again")
}



if (want_to_play == 2 && opponent == 2) {
  console.log ("The opponent picked MEATBALL!, You TIED!!! Please reset to play again")
}


if (want_to_play == 2 && opponent == 3) {
  console.log ("The opponent picked MILKSHACK!, You LOSE!!! Please reset to play again")
}

//Time to SHACK it up!!!

if (want_to_play == 3 && opponent == 1) {
  console.log ("The opponent picked FRIES!, You LOSE!!! Please reset to play again")
}


if (want_to_play == 3 && opponent == 2) {
  console.log ("The opponent picked MEATBALL! You WIN!!! Please reset to play again")
}


if (want_to_play == 3 && opponent == 3) {
  console.log ("The opponent picked also picked MEATBALL!, You TIED!!! Please reset to play again")
}






