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
let info = {
  name: "Shyam",
  age: 25,
  score: 90,
  name: "Harry",
};

console.log(info.name.toUpperCase()); // Harry because it will override the previous value of name. Duplicate keys are not allowed in object
