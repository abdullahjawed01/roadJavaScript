// JavaScript Promise and Promise Chaining

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

Output

// Promise {<resolved>:"There is a count value."}


// Example 2: Chaining the Promise with then()


// returns a promise

let countValue1 = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

// executes when promise is resolved successfully

countValue1
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });

// Output

// Promise resolved
// You can call multiple functions this way.

