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
  console.log ("You Tied!!! Please restart")
}



if (want_to_play == 1 && opponent == 2) {
  console.log ("The opponent picked MEATBALL!, You LOSE!!!")
}



if (want_to_play == 1 && opponent == 3) {
  console.log ("The opponent picked MILKSHACK!, You WIN!!!")
}

//meatball time

if (want_to_play == 2 && opponent == 1) {
  console.log ("The opponent picked FRIES!, You WIN!!!")
}



if (want_to_play == 2 && opponent == 2) {
  console.log ("The opponent picked MEATBALL!, You TIED!!!")
}


if (want_to_play == 2 && opponent == 3) {
  console.log ("The opponent picked MILKSHACK!, You LOSE!!!")
}

//Time to SHACK it up!!!

if (want_to_play == 3 && opponent == 1) {
  console.log ("The opponent picked FRIES!,You LOSE!!! ")
}


if (want_to_play == 3 && opponent == 2) {
  console.log ("The opponent picked MEATBALL! You WIN!!!")
}


if (want_to_play == 3 && opponent == 3) {
  console.log ("The opponent picked also picked MEATBALL!, You TIED!!!")
}


let user_count = (want_to_play == 1 && opponent == 3) ||
(want_to_play == 2 && opponent == 1) ||
(want_to_play == 3 && opponent == 2)



let opponent_count = (want_to_play == 1 && opponent == 2) ||
(want_to_play == 2 && opponent == 3) ||
(want_to_play == 3 && opponent == 1)


if (user_count) {
  console.log ("The score is 1-0, One more win to go!!!")
}

else {
  console.log ("The score is 0-1, your on thin ice buddy!!!")
}





