// JavaScript String
// A string represents textual data. It contains a sequence of characters. For example, "hello", "JavaScript", etc.

// In JavaScript, strings are surrounded by quotes:

// Single quotes: 'Hello'
// Double quotes: "Hello"
// Backticks: `Hello`



// string enclosed within single quotes
let fruit = 'apple';
console.log(fruit)

// string enclosed within double quotes
let country = "USA";
console.log(country);

// string enclosed within backticks
let result = `fail`;
console.log(result);

// output

// apple
// USA
// fail


//JavaScript Number
// In JavaScript, the number type represents numeric values (both integers and floating-point numbers).

// Integers - Numeric values without any decimal parts. Example: 3, -74, etc.
// Floating-Point - Numeric values with decimal parts. Example: 3.15, -1.3, etc.

// integer value
let integer_number = -3;
console.log(integer_number);

// floating-point value
let float_number = 3.15;
console.log(float_number);

// -3
// 3.15

// JavaScript BigInt
// BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type.

// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740999n"

let value2 = 900719925124740998n;



// 900719925124740999n
// TypeError: Cannot mix BigInt and other types, use explicit conversions


// JavaScript Boolean
// A Boolean data can only have one of two values: true or false. For example,

let dataChecked = true;
console.log(dataChecked);  // true

let valueCounted = false;
console.log(valueCounted);  // false



// JavaScript undefined
// In JavaScript, undefined represents the absence of a value.

// If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,



let name;
console.log(name);  // undefined



let name1 = undefined;
console.log(name);  // undefined


// JavaScript null
// In JavaScript, null represents "no value" or "nothing." For example,

let number = null;
console.log(number);  // null

// JavaScript Symbol
// A Symbol is a unique and primitive value. This data type was introduced in ES6.

// When you create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions. For example,


// two symbols with the same description
let value13 = Symbol("programiz");
let value23 = Symbol("programiz");

console.log(value13 === value23);  // false





// JavaScript Object
// An Object holds data in the form of key-value pairs. For example,



let student = {
    firstName: "John",
    lastName: null,
    class: 10
};
