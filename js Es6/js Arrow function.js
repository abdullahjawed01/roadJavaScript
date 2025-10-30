// JavaScript Arrow Function


// Example 1: Arrow Function With No Argument
// If a function doesn't take any argument, then you should use empty parentheses. For example,

const sayHello = () => "Hello, World!";

// call the arrow function and print its return value
console.log(sayHello());  

// Output: Hello, World!

// Example 2: Arrow Function With One Argument
// If a function has only one argument, you can omit the parentheses. For example,

const square = x => x * x;

// use the arrow function to square a number
console.log(square(5));  

// Output: 25

// this Keyword With Arrow Function

// In regular functions, the value of this depends on how the function is called. However, in arrow functions, this retains the value of the enclosing lexical context's this. For example,

// constructor function
function Person() {

    this.name = 'Jack',
    this.age = 25,
    this.sayAge = function () {

        console.log(this.age);

        let innerFunc = () => {
            console.log(this.age);
        }

        innerFunc();
    }
}

const x = new Person();
x.sayAge();

Output

// 25
// 25

