// Types of Errors
// In programming, there can be two types of errors in the code:

// Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

// Runtime Error: This type of error occurs during the execution of the program. For example,
// calling an invalid function or a variable.


// These errors that occur during runtime are called exceptions. Now, let's see how you can handle these exceptions.



// try catch in js

/*
The try..catch statement in javascript is used to handle 
runtime errors - it lets your code keep
 running even in something goes wrong

*/

// basic syntax of 

// try {

// }catch(error){
//     console.log(error);
// }

try {
    let a = 10;
    console.log(b);
} catch (error) {
    console.log("bhai error aagya");
}

// error.name(name of error)
//  and error.message(only what is error) 
// and error.stack  for whole log of error
// you can even customise your error