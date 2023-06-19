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
