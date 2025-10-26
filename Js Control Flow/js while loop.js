JavaScript while and do...while Loop
JavaScript while Loop
The while loop repeatedly executes a block of code as long as a specified condition is true.

The syntax of the while loop is:

while (condition) {
    // body of loop
}
Here,

The while loop first evaluates the condition inside ( ).
If the condition evaluates to true, the code inside { } is executed.
Then, the condition is evaluated again.
This process continues as long as the condition evaluates to true.
If the condition evaluates to false, the loop stops.
Flowchart of while Loop
Flowchart of while loop in JavaScript
Flowchart of JavaScript while loop
Example 1: Display Numbers From 1 to 3
// initialize variable i
let i = 1;

// loop runs until i is less than 4
while (i < 4) {
    console.log(i);
    i += 1;
}
Run Code
Output

1
2
3
Here is how the above program works in each iteration of the loop:

Variable	Condition: i < 4	Action
i = 1	true	1 is printed. i is increased to 2.
i = 2	true	2 is printed. i is increased to 3.
i = 3	true	3 is printed. i is increased to 4.
i = 4	false	The loop is terminated.
To learn more about loop conditions, visit JavaScript Comparison and Logical Operators.

Example 2: Sum of Only Positive Numbers
let num = 0, sum = 0;

// loop as long as num is 0 or positive
while (num >= 0) {

    // add all positive numbers
    sum += num;

    // take input from the user
    num = parseInt(prompt("Enter a number: "));
}

// last, display sum
console.log(`The sum is ${sum}`);
Run Code
Output

Enter a number: 2
Enter a number: 4
Enter a number: -3
The sum is 6
The above program prompts the user to enter a number.

Since JavaScript prompt() only takes inputs as string, parseInt() converts the input to a number.

As long as we enter positive numbers, the while loop adds them up and prompts us to enter more numbers.

So when we enter a negative number, the loop terminates.

Finally, we display the total sum of positive numbers.

Note: When we add two or more numeric strings, JavaScript treats them as strings. For example, "2" + "3" = "23". So, we should always convert numeric strings to numbers to avoid unexpected behaviors.

JavaScript do...while Loop
The do...while loop executes a block of code once, then repeatedly executes it as long as the specified condition is true.

The syntax of the do...while loop is:

do {
    // body of loop
} while(condition);
Here,

The do…while loop executes the code inside { }.
Then, it evaluates the condition inside ( ).
If the condition evaluates to true, the code inside { } is executed again.
This process continues as long as the condition evaluates to true.
If the condition evaluates to false, the loop terminates.
Flowchart of do...while Loop
Flowchart of do...while loop in JavaScript
Flowchart of JavaScript do...while loop
Example 3: Display Numbers from 3 to 1
let i = 3;

// do...while loop
do {
    console.log(i);
    i--;
} while (i > 0);
Run Code
Output

3
2
1
Here, the initial value of i is 3. Then, we used a do...while loop to iterate over the values of i. Here is how the loop works in each iteration:

Action	Variable	Condition: i > 0
3 is printed. i is decreased to 2.	i = 2	true
2 is printed. i is decreased to 1.	i = 1	true
1 is printed. i is decreased to 0.	i = 0	false
The loop is terminated.	-	-
What is the difference between while and do...while loops.


Example 4: Sum of Positive Numbers
let sum = 0, num = 0;

do {

    // add all positive numbers
    sum += num;

    // take input from the user
    num = parseInt(prompt("Enter a number: "));

    // loop terminates if num is negative
} while (num >= 0);

// last, display sum
console.log(`The sum is ${sum}`);
Run Code
Output

Enter a number: 2
Enter a number: 4
Enter a number: -3
The sum is 6
In the above program, the do...while loop prompts the user to enter a number.

As long as we enter positive numbers, the loop adds them up and prompts us to enter more numbers.

If we enter a negative number, the loop terminates without adding the negative number.

