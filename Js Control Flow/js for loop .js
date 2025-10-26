JavaScript for loop
In JavaScript, the for loop is used for iterating over a block of code a certain number of times, or to iterate over the elements of an array.

Here's a quick example of the for loop. You can read the rest of the tutorial for more details.

Example
for (let i = 0; i < 3; i++) {
    console.log("Hello, world!");
}

// Output:
// Hello, world!
// Hello, world!
// Hello, world!
Run Code
In this example, we used the for loop to print "Hello, world!" three times to the console.

JavaScript for loop Syntax
The syntax of the for loop is:

for (initialExpression; condition; updateExpression) {
    // for loop body
}
Here,

initialExpression - Initializes a counter variable.
condition - The condition to be evaluated. If true, the body of the for loop is executed.
updateExpression - Updates the value of initialExpression.
Once an iteration of the loop is completed, the condition is evaluated again. The process continues until the condition is false.

To learn more about the condition, visit JavaScript Comparison and Logical Operators.

Flowchart of JavaScript for Loop
Working of for loop in JavaScript with flowchart
Flowchart of JavaScript for loop
Example 1: Print Numbers From 1 to 5
for (let i = 1; i < 6; i++) {
    console.log(i);
}
Run Code
Output

1
2
3
4
5
In this example, we have printed numbers from 1 to 5 using a for loop.

Here is how this program works:

Iteration	Variable	Condition: i < 6	Action
1st	i = 1	true	1 is printed. 
i is increased to 2.
2nd	i = 2
true	2 is printed. 
i is increased to 3.
3rd	i = 3	true	3 is printed. 
i is increased to 4.
4th	i = 4
true	4 is printed. 
i is increased to 5.
5th	i = 5
true	5 is printed. 
i is increased to 6.
6th	i = 6
false	The loop is terminated.
Example 2: Display Sum of n Natural Numbers
// program to display the sum of natural numbers

let sum = 0;
const n = 100

// loop from i = 1 to i = n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log(`sum: ${sum}`);

// Output: sum: 5050
Run Code
Initially, the value of sum is 0, while n has a constant value of 100.

Then, we iterate a for loop from i = 1 to n. In each iteration,

i is added to sum.
Then, the value of i is increased by 1.
When i becomes 101, the test condition becomes false and sum will be equal to 0 + 1 + 2 + ... + 100.

Iterate Through an Array
A for loop can also be used to iterate over elements of an array. For example,

const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
Run Code
Output

apple
banana
cherry
This loop iterates through the fruits array and prints each element to the console.