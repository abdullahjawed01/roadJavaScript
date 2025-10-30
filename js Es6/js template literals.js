// JavaScript Template Literals (Template Strings)
// JavaScript template literals are strings that allow us to embed variables or expressions directly within them. They are enclosed in backticks ``.


let number1 = 8;
let number2 = 3;

// embed expression within template literal 
let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;

console.log(result);

// Output: The sum of 8 and 3 is 11.

// Tagged Templates


function displayMessage(message) {
    return message;
}

// create a tagged template
let result1 = displayMessage`Hello Jack`;

console.log(result1);  // [ 'Hello Jack' ]

// Here, unlike regular function arguments, the template literal is split into an array.


