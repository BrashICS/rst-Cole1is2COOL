/** The setup code **/

'use strict';

const prompt = require("prompt-sync")();

randInt(min, max, inclusive = true) {
  if (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;  // included
  else
    return Math.floor(Math.random() * (max - min - 1)) + min + 1;  // not included
}

/** Cole's code goes below here **/




