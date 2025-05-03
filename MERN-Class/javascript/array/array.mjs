// Array in javascript
// Array is a data structure that can hold multiple values

// syntax of array
// let arrayName = [value1, value2, value3, ...];

/* let list = ["Shyam", "Ram", 5, "Gita"];
console.log(list); */

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

/* et list1 = ["Shyam", "Ram", 5, "Gita"];
list1.push("Sita"); //? adds "Sita" to the end of the array
console.log(list1);

list1.pop(); // removes the last element from the array
console.log(list1);

list1.shift(); // removes the first element from the array
console.log(list1);

list1.unshift("Gita"); // adds "Gita" to the beginning of the array
console.log(list1); */

//Shortening the array(Ascending order)
// let names = ["Shyam", "Ram", "Gita", "Sita", "ABC", "Mohan", "SHYAM", "MOHAN"];
// let output = names.sort();
// console.log(output);

// let list1 = [
//   5, 2, 3, 4, 1, 18, 20, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19,
// ];
// let output1 = list1.sort((a, b) => {
//   //return a - b; for ascending order
//   return b - a; // for descending order
// });
// console.log(output1);

//Slice and Splice

/* let output2 = list2.slice(12, 18); // returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
console.log(output2); */

//reduce method
// Syntxa of reduce method
// let list2 = [
//   5, 2, 3, 4, 1, 18, 20, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19,
// ];
// let output3 = list2.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(output3);

///Reduce in ddart
/* List<int> list2 = [5, 2, 3, 4, 1, 18, 20, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19];
int output3 = list2.reduce((accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
print(output3); */

//.fold in dart
/* List<int> list2 = [5, 2, 3, 4, 1, 18, 20, 0, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19];      
int output3 = list2.fold(0, (accumulator, currentValue) {
  return accumulator + currentValue;
});
print(output3); */
// find the sum of all even numbers in the list using filter
let list = [200, 33, 66, 77, 99, 100];

let sum = list.reduce((accumulator, currentValue) => {
  if (currentValue % 2 == 0) {
    return accumulator + currentValue;
  } else {
    return accumulator;
  }
}, 0);
console.log(sum);

let output4 = list.filter((a) => a % 2 === 0).reduce((b, a) => b + a, 0); // How its works
console.log(output4);
