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
