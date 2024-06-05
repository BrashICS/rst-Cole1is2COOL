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




