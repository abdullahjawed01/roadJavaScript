// Module is a file that contains code to perform a specific task. A module may contain variables, function, classes etc. Let's see an example,

// Suppose, a file named greet.js contains the following code:

// exporting a function
export function greetPerson(name) {
    return `Hello ${name}`;
}
// Now, to use the code of greet.js in another file, you can use the following code:

// importing greetPerson from greet.js file
import { greetPerson } from './greet.js';

// using greetPerson() defined in greet.js
let displayName = greetPerson('Jack');

console.log(displayName); // Hello Jack


// In the above example, we created a module named greet.js that exports a function greetPerson(). We then imported this function in another file and used it to greet a person named Jack.

// Note: The file extension .js is required while importing modules in JavaScript.


// Export Multiple Objects
// It is also possible to export multiple objects from a module. For example,

// In the file module.js

// exporting the variable
export const name = 'JavaScript Program';

// exporting the function
export function sum(x, y) {
    return x + y;
}
// In main file,

import { name, sum } from './module.js';

console.log(name);
let add = sum(4, 9);
console.log(add); // 13

// Here,

// import { name, sum } from './module.js';
// This imports both the name variable and the sum() function from the module.js file.



