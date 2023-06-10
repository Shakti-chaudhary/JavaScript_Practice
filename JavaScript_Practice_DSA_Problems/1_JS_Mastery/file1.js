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
