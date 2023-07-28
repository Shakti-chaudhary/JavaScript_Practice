// ================ How javascript work ==========================
// Compilation
// Code execution

// why compilation

// how javascript code executes

// 1. compilation

//  compilation consist of two part
// 1. checks for errors.
// 2. Scopes checking.

// 2. Code execution -> In order to execute js code js creates execution context

// 1. globel execution context
// 1. Creation phase -> the global memory allocation
// 2. code execution ( code run line by line ).

// what is global execution context ?
// what is local {Function} execution context ?

// TDZ { Temporal dead zone }

// =================== Hoisting ========================
// move variables to top of there scope

// ==== Scope chain and lexical environment
// function has access to outer scope

// ================== Closures ========================

// function can return function

function printFullName(firstName, lastName) {
  function printName() {
    console.log(firstName, " ", lastName);
  }
  return printName;
}
const ans = printFullName("Rahul", "Singh");
ans();

// Example 1.

function hello(x) {
  const a = "varA";
  const b = "varB";
  return function () {
    console.log(a, b, x);
  };
}

const ans1 = hello("arg");
ans1();

// Example 2.

function myFunction(power) {
  return function (number) {
    return number ** power;
  };
}

const ans2 = myFunction(3);
console.log(ans2(2)); // 8

// Example 3.

function func() {
  let counter = 0;
  return function () {
    if (counter < 1) {
      console.log("Hi You Called Me");
      counter++;
    } else {
      console.log("Mai already ek bar call ho chuka hoon!");
    }
  };
}

const myFunc = func();
myFunc();
myFunc();
myFunc();
