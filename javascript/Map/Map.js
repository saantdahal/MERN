//? Example of Map in javascript
//? Map is a collection of key-value pairs
//* Syntax of Map
//* let mapName = new Map([key1, value1], [key2, value2], ...);

/* let map1 = new Map([
  ["name", "Shyam"],
  ["age", 25],
]);

console.log(map1);
console.log(map1.get("name")); //? Shyam */

//Filter map
//? Filter map is a method that creates a new array with all elements that pass the test implemented by the provided function
//* Syntax of filter map
//* let newArray = array.filter(callback(currentValue[, index[, array]])[, thisArg])

let map1 = new Map([
  ["name", "Shyam"],
  ["age", 25],
  ["score", 90],
  ["city", "Delhi"],
]);

// Filter entries where the value is a number
let filteredMap = new Map(
  [...map1].filter(([key, value]) => typeof value === "number") //
);

console.log(filteredMap);
