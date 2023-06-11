// Basic programming in javascript

// "use strict";

console.log("Hello World");

// declare a variable
var firstName = "John";

//  use a variable
console.log(firstName);

// change value

firstName = "Jane";
console.log(firstName);

// ===== Rules for naming variables =============

// 1. you cannot start with a number
// example :-
// 1value (invalid)
// value1 (valid)

var value1 = 2;
console.log(value1);

// 2. you cannot use special characters (&,@,%,!,#,$, )  (except $ and _)
// example :-
// $value (valid)
// _value (valid)

var $firstName = "Mohit"; // camel case writing
console.log($firstName);

// 3. you cannot use spaces

var first_name = "harshit"; // snake case writing
console.log(first_name);

// example :-
// first name (invalid)

// convention
// 4. start with a small letter and use camelCase

// ================= Let keyword ===============
// declare a variable with let keyword

var firstNName = "Mohit";
let firstsName = "Harshit";

// block scope vs function scope

// ================ Const keyword ==============

// declare a variable with const keyword

const pi = 3.14;
console.log(pi);

// ================ String Literal =============
// strings are immutable (cannot be changed) in nature

let second_name = "Rahul";
console.log(second_name);

//  R a h u l
//  0 1 2 3 4

console.log(second_name[0]);
console.log(second_name[1]);
console.log(second_name[4]);

// length of string
// firs_name.length
console.log(second_name.length);

// last character of string
console.log(second_name[second_name.length - 1]);

// ================ Strings functions =============

// trim()

let firstName1 = "  Mohit  ";
let firstName2 = firstName1.trim();
console.log(firstName2, firstName2.length);

// toUpperCase()

console.log(firstName2.toUpperCase());

// toLowerCase()

console.log(firstName2.toLowerCase());

// slice()

// Start index
// End index

console.log(firstName2.slice(0, 2));

// ================= typeof operator =============

// data types (primitive data types)
// 1. number  2,3,4,5
// 2. string "Mohit"
// 3. boolean  true,false (true or false)
// 4. null
// 5. undefined
// 6. object
// 7. function
// 8. array
// 9. symbol
// 10. bigint

let age = 22;
let name = "Mohit";
console.log(typeof age);
console.log(typeof name);

// convert string to number
let age1 = "22";
console.log(typeof age1);
console.log(typeof +age1);
console.log(Number(age1));

// convert number to string

let age2 = 22;
console.log(typeof age2);
console.log(String(age2));
console.log(typeof (age2 + ""));

// ================= String concatenation ==============

let string1 = "Mohit";
let string2 = "Kumar";

console.log(string1 + " " + string2);
console.log(string1.concat(" ", string2));

let number1 = "22";
let number2 = "12";

let newNumber = number1 + number2;
let newNumber1 = +number1 + +number2; // convert string to number and adding

console.log(newNumber);
console.log(newNumber1);

// ================ Template string ===================

let age3 = 22;
let name3 = "Mohit";

// "my name is harshit and my age is 22"
// let aboutMe = "my name is " + name3 + " and my age is " + age3;

let aboutMe = `my name is ${name3} and my age is ${age3}`;
console.log(aboutMe);

// =============== Undefined ========================

// Undefined variable

let undefinedVariable; // undefined
// var allowed but const not allowed to undefined
console.log(typeof undefinedVariable);
undefinedVariable = 11;
console.log(typeof undefinedVariable, undefinedVariable);

// null

let nullVariable = null;
console.log(nullVariable);
console.log(typeof nullVariable); // error | bug showing object
nullVariable = "Jane";
console.log(nullVariable);

// Bigint

let bigInt = BigInt(22);
let bigInt1 = 44n;
console.log(bigInt);
console.log(typeof bigInt);

// =============== booleans & comparison operators ====================

// booleans
// true or false

let num1 = 7;
let num2 = 7;

console.log(num1 >= num2);
console.log(num1 > num2);

// == vs ===

let num3 = "7";
console.log(num3 == num2);
console.log(num3 === num2);

//. != vs !==

console.log(num3 != num2);
console.log(num3 !== num2);

// =============== truthy and falsy values ================

// truthy values

// true

// falsy values

// false
// ""
// null
// undefined
// 0
// NaN

// =============== if else condition ======================

let age4 = 21;
if (age4 >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}
if (age4 % 2 == 0) {
  console.log("even");
} else {
  console.log("odd");
}

// =============== ternary operator =====================

let age5 = 21;
let result =
  age5 >= 18 ? "You are eligible to vote" : "You are not eligible to vote";
console.log(result);

// ================= && || operators =================

let age6 = 21;
let result1 = "Pass";

if (age6 >= 18 && result1 == "Pass") {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

if (age6 >= 18 || result1 == "Fail") {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// ================= nested if else =================

let winnigNumber = 19;
// let userGuess = +prompt("Guess the number");
let userGuess = 17;
if (winnigNumber == userGuess) {
  console.log("You won");
} else {
  if (userGuess > winnigNumber) {
    console.log("You are too high");
  } else {
    console.log("You are too low");
  }
}

// ================ if elseif else =================

let tempInDegrees = 20;
if (tempInDegrees > 30) {
  console.log("It is hot outside");
} else if (tempInDegrees > 20) {
  console.log("It is warm outside");
} else {
  console.log("It is cold outside");
}
