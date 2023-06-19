// ================ Array methods ================

// Foreach method

const arr = [11, 42, 32, 4, 5];

arr.forEach((value, index) => {
  console.log("Value: " + value + " on Index: " + index);
});

//  Map method

let map = arr.map((value, index) => {
  return value * 2;
});
console.log(map); // return array not modify actual array
console.log(arr);

// Filter method

let filter = arr.filter((value, index) => {
  return value % 2 === 0;
});
console.log(filter);

// Reduce method
// accumulator variable store sum

// can pass initial value as argument to accumulator
// arr.reduce(()=>{},0) => 0 accumulator value

let reduce = arr.reduce((accumulator, index) => {
  return accumulator + index;
});
console.log(reduce);

// Sort method
// work on ascii value

let arr2 = [1, 121, 3, 11, 42, 32, 4, 75];
console.log(arr2.sort((a, b) => a - b));

// Find method
// return first value that satisfy given condition

const myArray = ["Hello", "cat", "dog", "lion"];
let ans = myArray.find((string) => string.length === 3);
console.log(ans);

// Every method
// return boolean value

let every = arr2.every((value) => value % 2 === 0);
console.log(every);

// Some methods
// return boolean value

let some = arr2.some((value) => value % 2 === 0);
console.log(some);

// Fill methods
// value , start , end
// change main array

const myArray1 = new Array(10).fill(0);
arr2.fill(0, 2, 5);
console.log(myArray1);
console.log(arr2);

// Splice methods
// start  delete insert
//change main array

// delete
arr2.splice(2, 3);
console.log(arr2);

// insert
arr2.splice(2, 0, -2, 66, 22);
console.log(arr2);
