// JavaScript if...else Statement
// The JavaScript if...else statement is used to execute/skip a block of code based on a condition.


JavaScript if...else Statement
In computer programming, the if...else statement is a conditional statement that executes a block of code only when a specific condition is met. For example,

Suppose we need to assign different grades to students based on their scores.

If a student scores above 90, assign grade A.
If a student scores above 75, assign grade B.
If a student scores above 65, assign grade C.
These conditional tasks can be achieved using the if...else statement.

JavaScript if Statement
We use the if keyword to execute code based on some specific condition.

The syntax of if statement is:

if (condition) {
    // block of code
}
The if keyword checks the condition inside the parentheses ().

If the condition is evaluated to true, the code inside { } is executed.
If the condition is evaluated to false, the code inside { } is skipped.
Note: The code inside { } is also called the body of the if statement.

Working of if statement in JavaScript
Working of the if Statement
Example 1: JavaScript if Statement
// Program to check if the number is positive

const number = prompt("Enter a number: ");

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("positive number");
}

console.log("nice number");
Run Code
Sample Output 1

Enter a number: 5
positive number
nice number
In the above program, when we enter 5, the condition number > 0 evaluates to true. Thus, the body of the if statement is executed.

Sample Output 2

Enter a number: -1
nice number
Again, when we enter -1, the condition number > 0 evaluates to false. Hence, the body of the if statement is skipped.

Since console.log("nice number"); is outside the body of the if statement, it is always executed.

Note: We use comparison and logical operators in our if conditions. To learn more, you can visit JavaScript Comparison and Logical Operators.

JavaScript else Statement
We use the else keyword to execute code when the condition specified in the preceding if statement evaluates to false.

The syntax of the else statement is:

if (condition) {
    // block of code
    // execute this if condition is true
}
else {
    // block of code
    // execute this if condition is false
}
The if...else statement checks the condition and executes code in two ways:

If condition is true, the code inside if is executed. And, the code inside else is skipped.
If condition is false, the code inside if is skipped. Instead, the code inside else is executed.
Working of if-else statement in JavaScript
Working of the if...else statement
Example 2: JavaScript if…else Statement
let age = 17;

// if age is 18 or above, you are an adult
// otherwise, you are a minor

if (age >= 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}

// Output: You are a minor
Run Code
In the above example, the if statement checks for the condition age >= 18.

Since we set the value of age to 17, the condition evaluates to false.

Thus, the code inside if is skipped. And, code inside else is executed.

When can we omit { } in if…else statements?

JavaScript else if Statement
We can use the else if keyword to check for multiple conditions.

The syntax of the else if statement is:

// check for first condition
if (condition1) {
    // if body
}

// check for second condition
else if (condition2){
    // else if body
}

// if no condition matches
else {
    // else body
}
Here,

First, the condition in the if statement is checked. If the condition evaluates to true, the body of if is executed, and the rest is skipped.
Otherwise, the condition in the else if statement is checked. If true, its body is executed and the rest is skipped.
Finally, if no condition matches, the block of code in else is executed.
Working of if-else ladder statement in JavaScript
Working of the if...else if...else statement
Example 3: JavaScript if...else if Statement
let rating = 4;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

// Output: Good rating!
Run Code
In the above example, we used the if statement to check for the condition rating <= 2.

Likewise, we used the else if statement to check for another condition, rating >= 4.

Since the else if condition is satisfied, the code inside it is executed.

How to use multiple else if statements?



Nested if...else Statement
When we use an if...else statement inside another if...else statement, we create a nested if...else statement. For example,

let marks = 60;

// outer if...else statement
// student passed if marks 40 or above
// otherwise, student failed

if (marks >= 40) {

    // inner if...else statement
    // Distinction if marks is 80 or above

    if (marks >= 80) {
        console.log("Distinction");
    }
    else {
        console.log("Passed");
    }
}

else {
    console.log("Failed");
}

// Output: Passed
Run Code
Outer if...else

In the above example, the outer if condition checks if a student has passed or failed using the condition marks >= 40. If it evaluates to false, the outer else statement will print Failed.

On the other hand, if marks >= 40 evaluates to true, the program moves to the inner if...else statement.

Inner if...else statement

The inner if condition checks whether the student has passed with distinction using the condition marks >= 80.

If marks >= 80 evaluates to true, the inner if statement will print Distinction.

Otherwise, the inner else statement will print Passed.