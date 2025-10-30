// JavaScript ES6
// JavaScript ES6 (also known as ECMAScript2015 or ECMAScript6) is the sixth edition of JavaScript introduced in June 2015.

// ECMAScript (European Computer Manufacturers Association Script) is the standard specification of JavaScript to ensure compatibility in all browsers and environments.


// Declaration With let Keyword
// The let keyword creates block-scoped variables, which means they are only accessible within a particular block of code. For example,

{
    // block of code

    // declare variable with let
    let name = "Peter";

    // can be accessed here
    console.log(name); // Peter
}

// can't be accessed here
// console.log(name);
// Run Code
// Output

// Peter
// ERROR!
// ...
// ReferenceError: name is not defined


// Declaration With const Keyword


// The const keyword creates constant variables that cannot be changed after declaration. For example,

// declare variable with const
const fruit = "Apple";

console.log(fruit);

// reassign fruit
// this code causes an error
fruit = "Banana";

console.log(fruit);
// Run Code
// Output

// Apple
// Error: Assignment to constant variable


