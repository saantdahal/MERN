// Set in javascript
// Set is a collection of unique values, meaning that it does not allow duplicate values.
// Syntax
// let set = new Set([iterable]);
// let set = new Set([1, 2, 3, 4, 5]);
// let set = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);

let list = [1, 33, 45, 40, 45, 42, 13, 13, 12, 12, 10, 10, 5, 5];
let set = [...new Set(list)];
console.log(set);
