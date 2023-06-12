// ========================== Arrays ===========================

// intro to arrays || reference data type

//  how to create arrays

let fruit = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["apple", 1, true];

console.log(fruit);
console.log(fruit[2]);
console.log(numbers);
console.log(numbers[2]);
console.log(mixed);
mixed[0] = "kiwi"; // reassign an element in an array
console.log(mixed[0]);

console.log(Array.isArray(fruit));

// array indexing

// [ "apple", "banana", "orange" ]
//    0         1          2

//  ================== Arrays methods ========================

let fruit1 = ["apple", "banana", "orange"];

// array push pop

fruit1.push("kiwi");
console.log(fruit1);
let popItem = fruit1.pop();
console.log(fruit1, " poped item is: ", popItem);

// array shift unshift

let shiftItem = fruit1.shift();
console.log(fruit1, " shifted item is: ", shiftItem);

fruit1.unshift("pineapple");

// unshift adds an element to the beginning of an array and return the new length
let unshiftItem = fruit1.unshift("mango");
console.log(fruit1, " unshifted item is: ", unshiftItem);

//  =========== Primitive vs Reference data types ============

let num1 = 6;
let num2 = num1;
num1 = 7;

console.log(num1, num2);

// reference types
// array

let studentId = ["A", "B", "C"];
let studentId2 = studentId;
console.log(studentId, studentId2);
studentId[1] = "D";
studentId.push("E");
console.log(studentId, studentId2);

//  ============= Clone an array =======================

// how to clone array

let array1 = ["item1", "item2", "item3"];
// let array2 = ["item1", "item2", "item3"];

// let array2 = array1.slice(0); // most performant
// let array2 = [...array1]; //new way

// how to concatenate two arrays

let array2 = [].concat(array1);

console.log(array1, array2);
console.log(array1 === array2);

// ============== Loops in array ===================

// for loop

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// use const for creating an array

const fruits = ["apple", "banana", "orange"];
fruits.push("kiwi");
console.log(fruits);

// while loop

let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// for of loop in array

for (let fruit of fruits) {
  console.log(fruit);
}

//  for in loop in array

for (let index in fruits) {
  console.log(index);
  console.log(fruits[index]);
}

//  ============ Array destructuring =================

let [fruitOne, fruitTwo, fruitThree] = fruits;
// let [fruitOne, fruitTwo, fruitThree] = [...fruits];
// let [fruitOne, , fruitThree] = fruits;
// console.log(fruitOne, fruitThree);
console.log(fruitOne, fruitTwo, fruitThree);
