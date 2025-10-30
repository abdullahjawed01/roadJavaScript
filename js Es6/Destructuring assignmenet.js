// JavaScript Destructuring


// The destructuring assignment introduced in ES6 makes it easy to assign array values and object properties to distinct variables. For example,
// assigning object attributes to variables
const person = {
    fname: 'Sara',
    age: 25,
    gender: 'female'    
}

// destructuring assignment
let { name, age, gender } = person;

console.log(fname); // Sara
console.log(age); // 25
console.log(gender); // female

// In the above example, we created an object person with three properties: fname, age, and gender. We then used destructuring assignment to extract these properties and assign them to distinct variables with the same names.

// Array Destructuring

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [a, b, c] = arrValue;

console.log(a); // one
console.log(b); // two
console.log(c); // three


// In the above example, we created an array arrValue with three elements. We then used destructuring assignment to extract these elements and assign them to distinct variables x, y, and z.

// Swapping Variables
// In this example, two variables are swapped using the destructuring assignment syntax.

// program to swap variables

let x = 4;
let y = 7;

// swapping variables
[x, y] = [y, x];

console.log(x); // 7
console.log(y); // 4

