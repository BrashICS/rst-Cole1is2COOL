'use strict';

randInt(min, max, inclusive = true) {
  if (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;  // included
  else
    return Math.floor(Math.random() * (max - min - 1)) + min + 1;  // not included
}

let num1 = randInt(1,12)
let num2 = randInt(1,12)

console.log(result);




