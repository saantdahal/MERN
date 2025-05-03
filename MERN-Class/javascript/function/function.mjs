// Arrow function
// const add = (a, b) => a + b;
// console.log(add(1, 2)); // 3

// => Long form
// const add = function(a, b) {
//     return a + b;
// };
// console.log(add(1, 2)); // 3

//Define functions, function declaration, call a function , pass value to function , function with return , arrow function
// Syntax of function declaration

//Definer function
/* let sum = function (a, b) {
  return a + b;
};

// Function declaration
function add(a, b) {
  return a + b;
}

//call a function
console.log(add(1, 2)); // 3
console.log(sum(1, 2)); // 3

let add1 = function () {
  return 1 + 2;
};
add1(); */
/* 
let sum = function () {
  console.log(" I am a function");
  let a = 1;
  let b = 2;
  console.log(a + b);
};

sum();

// Pass value to function
function add(a, b) {
  // Parameter
  return a + b;
}
console.log(
  ` This is the example of pass value to functions and the result is ${add(
    1,
    2
  )}` //Argument
);
 */

/* //Default parameter
let sum = function (a, b, c=5) {
  let d = a + b + c;
  console.log(d);
};

sum(1, 2);
//it it not necessary to pass all the parameters to the function. We can pass the vaue to parameter which we want to pass.
// If we do not pass the value to the parameter then it will take the default value which is defined in the function. */

/* // function with return
function add(a, b) {
  let c = a + b;
  // return c; // return the value of c to the function and the function will be terminated
  return c;
}
// Fuction without return, call normally if function with return first store it on a variable and then call it
 */

// Arrow function
// Arrow function is a shorter syntax for writing function expressions in JavaScript. It is also known as fat arrow function. It is introduced in ES6 (ECMAScript 2015).

// Syntax of arrow function
// const functionName = (parameters) => {
//     // function body
//     // return value
// };

const add = (a, b, c) => a + b + c;
console.log(add(1, 2, 2));

// with return statement
const add1 = (a, b) => {
  let sum = a + b;
  return sum;
};

let c = add1(1, 2);
console.log(c);
