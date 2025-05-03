// Promise in js
/* 
let Promise = new Promise((resolve, reject) => {});
 */

//async and await
// 'async' function alwwaus return a promise, other values are wrapped in a promise automatically
// 'await' can only be used inside async functions, it makes the function wait for a promise to resolve or reject

// try catch

// divided by zero expections

try {
  let a = 10;
  let b = 0;
  let c = a / b;
  console.log(c);
} catch (e) {
  console.log(e, "error");
}
