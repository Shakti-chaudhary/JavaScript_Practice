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
