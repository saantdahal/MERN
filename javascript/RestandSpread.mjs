// Rest operator in javascript
// The rest operator is used to collect all remaining elements into an array
// in Object
/* let { name, ...info } = {
  name: "John",
  age: 30,
  city: "New York",
  country: "USA",
};
console.log(name);
console.log(info); */

// Using Array

/* let [list, ...rest] = [1, 2, 3, 4, 5];
console.log(list);
console.log(rest); */
/* 
let sum = (a, b, ...c) => {
  console.log(a + b + c);
};
sum(1, 2, 3, 4, 5);

//Destructuring is the process of unpacking values from arrays or properties from objects into distinct variables

let [planet1, planet2, planet3, planet4] = [
  "Earth",
  "Mars",
  "Venus",
  "Jupiter",
];

console.log(planet4); */

/* //Spread operator in javascript
//Spread operator are wrapper ([]) array opener
let name = ["John", "Doe"];
let num = [1, 2, 3, 4, 5];
let output = ["mouse", ...name, "Key", ...num];
console.log(output); */

//Spread operator in object
let info = {
  name: "John",
  age: 30,
  country: "USA",
};

let info2 = {
  location: "California",
  city: "Los Angeles",
  ...info,
};

console.log(info2);
