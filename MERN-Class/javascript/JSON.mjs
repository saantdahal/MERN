// JSON in javascript

let info = {
  name: "John Doe",
  age: 30,
  city: "New York",
};
console.log(JSON.stringify(info)); //
// Convert object to JSON string

let c = JSON.parse(JSON.stringify(info));
console.log(c);
