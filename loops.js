//  Build a function forLoop. It takes an array as an argument. start counting from 0, and, using
//  a for loop, add a string to the array. But not just any string. If your i value is 1, add the
//  string "I am 1 strange loop."; but if your i value is anything else, add the string "I am ${i}
//  strange loops." to the array 25 times. (Remember flow control with if and else? And how do we
//  interpolate i?) Then return the array.
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop");
    } else {
      array.push("I am ${i} strange loops");
    }
  }
  return array
}


//  Create a function called whileLoop in loops.js. The function should take a number as an argument.
//  Using a while loop, count down(Using console.log) from the passed in number to 0. Then return the
//  string 'done'.
function whileLoop(n) {
  let countdown = n;
  while (countdown > 0) {
    console.log(--countdown)
  }
  return 'done'
}


//  Define a function called doWhileLoop. The function should taker an array as an argument. Use the
//  maybeTrue() function (You can copy it from the README) as the condition, and remove elements from the
//  array until the array is empty or until maybeTrue() returns false. (Your condition might look something
//  like array.length > 0 && maybeTrue().) Finally, return the array


function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.shift()
    console.log('doo-bee-doo-bee-doo')
  } while (array.length > 0);
  return array
}
