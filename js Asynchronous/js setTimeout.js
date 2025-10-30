// Javascript setTimeout()

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

setTimeout(greet, 3000);
console.log('This message is shown first');

// output
// This message is shown first
// Hello world

// In the above example, the greet() function is executed after a delay of 3000 milliseconds (or 3 seconds) using the setTimeout() method. The message 'This message is shown first' is logged to the console immediately, demonstrating that the setTimeout() method allows other code to run while waiting for the specified delay to complete.\

// program to display a text using setTimeout method
function greet() {
    console.log('Hello world');
}

let intervalId = setTimeout(greet, 3000);
console.log('Id: ' + intervalId);   

// output
// Id: 3
// Hello world

//display time every 3 seconds
// program to display time every 3 seconds
function showTime() {

    // return new date and time
    let dateTime= new Date();

    // returns the current local time
    let time = dateTime.toLocaleTimeString();

    console.log(time)

    // display the time after 3 seconds
     setTimeout(showTime, 3000);
}

// calling the function
showTime();

// Output
// 10:20:30 AM
// 10:20:33 AM
// 10:20:36 AM
// 10:20:39 AM
// ...


// JavaScript clearTimeout()

// program to stop the setTimeout() method

let count = 0;

// function creation
function increaseCount(){

    // increasing the count by 1
    count += 1;
    console.log(count)
}

let id = setTimeout(increaseCount, 3000);

// clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');

// Output

// setTimeout is stopped.

