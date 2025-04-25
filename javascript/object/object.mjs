// Object in JavaScript
/* let info = {
  name: "Shyam",
  age: 25,
  score: 90,
  location: {
    location: "kathmandu",
    country: {
      name: "Nepal",
      code: "NP",
    },
  },
};

console.log(info.location.country.code);
// Change the value of the object
info.location.country.code = "NP-001";
console.log(info.location.country.code);

// Classes and Objects in JavaScript but functional programming is used in JavaScript mostly

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to display person details
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
// Creating an object of the Person class
let person1 = new Person("Shyam", 25);
person1.display(); */
/* let info = {
  name: "Shyam",
  age: 25,
  score: 90,
  name: "Harry",
};

console.log(info.name.toUpperCase()); // Harry because it will override the previous value of name. Duplicate keys are not allowed in object
 */

/* let info = {
  fullName: "Shthyan",
  address: "Kathmandu",
  favFruit: ["Apple", "Banana", "Mango"],
  location: {
    location: "Kathmandu",
    country: {
      name: "Nepal",
      code: "NP",
    },
  },
  address: () => {
    console.log("I am function");
  },
};

console.log(info.favFruit[0]);
info.address(); */

// This keyword is not used in arrow function. It is used in nirml function.
/* let info = {
  firstName: "Shyam",
  lastName: "Shrestha",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },

  fullName: () => {
    // make it work with arrow function
    console.log(this?.firstName + " " + this?.lastName); // undefined because arrow function does not have its own this keyword
  },
};

console.log(info.fullName()); */

//Find the total sum of all elements in the array of objects

/* let info = [
  {
    name: "earphone",
    price: 100,
  },
  {
    name: "phoone",
    price: 1000,
  },
  {
    name: "laptop",
    price: 10000,
  },
];
// Find the total sum of all elements in the array of objects

let totalSumm = info.map((a) => a.name).reduce((p, c) => p + c, 0);
console.log(totalSumm); */

/* // convert object into array
let info = {
  name: "Ram",
  age: 50,
  address: "Kathmandu",
};

console.log(Object.keys(info));
console.log(Object.values(info)); */

// Convert Array into Object

let info = {
  name: "Ram",
  age: 50,
  address: "Kathmandu",
};
console.log(Object.entries(info)[2]);
