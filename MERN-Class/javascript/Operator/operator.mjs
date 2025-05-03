// Operators in javascript
// Operators are special symbols that perform operations on variables and values.
// Operators are used to assign values, compare values, perform arithmetic operations, and more.

// Arithmetic Operators
// +, - , * , / , %

// console.log("123"
// + " " +456);// if we add string and number then it will convert number to string and concatenate them.
// console.log(1 + 2+ "3"+4); // Addition

//Comparison Operators
// ==, ===, !=, !==, >, <, >=, <=
// == is used to compare values only, while === is used to compare values and types.
// != is used to compare values only, while !== is used to compare values and types.
// >, <, >=, <= are used to compare values.
// console.log(1 == "1"); // true
// console.log(1 === "1"); // false
//=== is used to compare values and types. It will return false if the types are different.

console.log(1 == "1"); // true because == only compares values
console.log(1 === "1"); // false because === compares values and types
console.log(1 != "1"); // false because != only compares values
console.log(1 !== "1"); // true     because !== compares values and types
console.log(1 > 2); // false   because 1 is not greater than 2
console.log(1 < 2); // true because 1 is less than 2
console.log(1 >= 2); // false because 1 is not greater than or equal to 2
console.log(1 <= 2); // true  because 1 is less than or equal to 2
console.log(1 > "2"); // false because "2" is converted to number 2 and 1 is not greater than 2
console.log(1 < "2"); // true because "2" is converted to number 2 and 1 is less than 2
console.log(1 >= "2"); // false because "2" is converted to number 2 and 1 is not greater than or equal to 2
console.log(1 <= "2"); // true  because "2" is converted to number 2 and 1 is less than or equal to 2
console.log(1 > "1"); // false  // because "1" is converted to number 1 and 1 is not greater than 1
console.log(1 < "1"); // false // because "1" is converted to number 1 and 1 is not less than 1
