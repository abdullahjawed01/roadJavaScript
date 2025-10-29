// Modules in js

// Modules are reusable pieces of code that can be exported from one file and imported into another file. This helps in organizing code, maintaining it, and avoiding global namespace pollution.

// Example of creating a module:    

// mathModule.js
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}
export const PI = 3.14159;

// Example of importing a module:   
// main.js
import { add, subtract, PI } from './mathModule.js';
console.log("Addition:", add(5, 3)); // Output: Addition: 8
console.log("Subtraction:", subtract(5, 3)); // Output: Subtraction: 2
console.log("Value of PI:", PI); // Output: Value of PI: 3.14159