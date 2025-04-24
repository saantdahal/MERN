// Array in javascript
// Array is a data structure that can hold multiple values

// syntax of array
// let arrayName = [value1, value2, value3, ...];

let list = ["Shyam", "Ram", 5, "Gita"];
console.log(list);

// List in javascript is a collection of items that can be of different types
// Example: list of names, list of numbers, list of objects, list of arrays, etc.

// Syntax of Map
// Differences between .js and .mjs is that .mjs is a module file and .js is a script file
// .mjs file can be imported in .js file but .js file cannot be imported in .mjs file
// .mjs file can be used to create modules that can be imported in other .mjs files
/* const obj1 = {
  name: "Developer",
};

const obj2 = {
  name: "Developer",
};
console.log(obj1 === obj2);
console.log(obj1 == obj2);
// Non prqimitive data types are compared by reference and primitive data types are compared by value */

// includes
/* let List = ["Shyam", "Ram", 5, "Gita"];
console.log(List.includes("Shyam")); */

//push , pop, shift, unshift
//push() method adds one or more elements to the end of an array and returns the new length of the array
// pop() method removes the last element from an array and returns that element. This method changes the length of the array
/// shift() method removes the first element from an array and returns that element. This method changes the length of the array
/// unshift() method adds one or more elements to the beginning of an array and returns the new length of the array

let list1 = ["Shyam", "Ram", 5, "Gita"];
list1.push("Sita"); //? adds "Sita" to the end of the array
console.log(list1);

list1.pop(); // removes the last element from the array
console.log(list1);

list1.shift(); // removes the first element from the array
console.log(list1);

list1.unshift("Gita"); // adds "Gita" to the beginning of the array
console.log(list1);
