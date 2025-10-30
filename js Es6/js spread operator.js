// JavaScript Spread Operator


let fruits = ["Apple", "Banana", "Cherry"];

// add fruits array to moreFruits1
// without using the ... operator
let moreFruits1 = ["Dragonfruit", fruits, "Elderberry"];

// spread fruits array within moreFruits2 array
let moreFruits2 = ["Dragonfruit", ...fruits, "Elderberry"];

console.log(moreFruits1);
console.log(moreFruits2);

// Output

// [ 'Dragonfruit', [ 'Apple', 'Banana', 'Cherry' ], 'Elderberry' ]
// [ 'Dragonfruit', 'Apple', 'Banana', 'Cherry', 'Elderberry' ]

let obj1 = { x : 1, y : 2 };
let obj2 = { z : 3 };

// use the spread operator to add
// members of obj1 and obj2 to obj3
let obj3 = {...obj1, ...obj2};

// add obj1 and obj2 without spread operator
let obj4 = {obj1, obj2};

console.log("obj3 =", obj3);
console.log("obj4 =", obj4);

// Output

// obj3 = { x: 1, y: 2, z: 3 }
// obj4 = { obj1: { x: 1, y: 2 }, obj2: { z: 3 } }

