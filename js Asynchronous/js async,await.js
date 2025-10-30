// JavaScript async/await


// We use the async keyword with a function to represent that the function is an asynchronous function. The async function returns a promise.

//aSYNC function
async function greet() {
    return "Hello World";
}
// calling the async function
greet().then((value) => console.log(value));    
// Output
// Hello World

// Example 2: Await Keyword
// The await keyword is used to wait for a promise. It can only be used inside an async function.   
// function that returns a promise
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
// async function
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
}
// calling the async function
asyncCall();
// Output
// calling
// resolved


