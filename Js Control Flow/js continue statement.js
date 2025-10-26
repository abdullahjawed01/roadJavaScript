JavaScript continue Statement
The continue statement skips the current iteration of the loop and proceeds to the next iteration.

Here's a brief example to demonstrate the continue statement. You can read the rest of the tutorial to learn more.

Example
// display odd numbers

for (let i = 1; i <= 5; i++) {
    // skip the iteration if i is even
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Output:
// 1
// 3
// 5
Run Code
Here, continue skips the rest of the loop's body when i is even. Thus, only odd numbers are printed.

Working of JavaScript continue Statement
Working of continue statement in JavaScript
Working of JavaScript continue Statement
Note: The continue statement is usually used inside decision-making statements such as if...else.

Example 1: JavaScript continue With for Loop
We can use the continue statement to skip iterations in a for loop. For example,

for (let i = 1; i <= 10; ++i) {

    // skip iteration if value of
    // i is between 4 and 9
    if (i > 4 && i < 9) {
        continue;
    }
    console.log(i);
}
Run Code
Output

1
2
3
4
9
10
In the above example, we used a for loop to print the value of the variable i in each iteration. Notice the statement,

if (i > 4 && i < 9) {
    continue;
}
Here, the continue statement is executed whenever i becomes more than 4 and less than 9.

Hence, the output skips the values 5, 6, 7, and 8.

Example 2: JavaScript continue With while Loop
We can also use the continue statement with a while loop. For example,

var num = 1;

while (num <= 10) {

    // skip iteration if num is even
    if (num % 2 === 0) {
        ++num;
        continue;
    }

    console.log(num);
    ++num;
}
Run Code
Output

1
3
5
7
9
In the above example, we used a while loop to print odd numbers from 1 to 10. Notice the line,

if (num % 2 === 0) {
    ++num;
    continue
}
When the number is even,

The value of num is incremented for the next iteration.
The continue statement then skips the current iteration.
Notice that we have increased the value of num both inside and outside the if statement.

Inside the if Block

You must increase the value of num before the continue statement is executed. Otherwise, you will end up creating an infinite loop because num <= 10 will always be true.

Outside the if Block

When the if block is not executed, your code to increase num will also be skipped. Thus, you must increase num again outside the if block to prevent an infinite loop.

