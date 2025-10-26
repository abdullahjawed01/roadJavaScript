// JavaScript Type Conversion
// In programming, type conversion is the process of converting data of one type to another. For example, converting string data to number.

// There are two types of type conversion in JavaScript:

// Implicit Conversion - Automatic type conversion.
// Explicit Conversion - Manual type conversion.
// JavaScript Implicit Conversion
// In certain situations, JavaScript automatically converts data of one type to another (to the right type). This is known as implicit conversion. For example,


// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));


// 32 - string
// 3true - string
// 3null - string

// In this example, we performed implicit type conversion using the + operator with a string and another data type.

// Here,

// "3" + 2 - Converts the number 2 to string and joins it to "3", resulting in the string "32".
// "3" + true - Converts the boolean true to string and joins it to "3", resulting in the string "3true".
// "3" + null - Converts null to string and joins it to "3", resulting in the string "3null".


// JavaScript Explicit Conversion
// In explicit type conversion, you manually convert one type of data into another using built-in functions. For example,


let result;

// convert string to number
result = Number("5");
console.log(result, "-", typeof(result));

// convert boolean to string
result = String(true);
console.log(result, "-", typeof(result));

// convert number to boolean
result = Boolean(0);
console.log(result, "-", typeof(result));

output
// 5 - number
// true - string
// false - boolean

// Here,

// Number("5") changes the string "5" into the number 5.
// String(true) turns the boolean true into the string "true".
// Boolean(0) converts the number 0 to the boolean false because 0 is considered a falsy value in JavaScript.


