// ============== Pointers ==============

// Not a reference type

let num1 = 5;
let num2 = num1;
console.log(num1, num2);

num1 = 10;
console.log(num1, num2);

// a reference type OR pointers

let obj1 = {
  value: 11,
};

let obj2 = obj1;
console.log(obj1, obj2);

obj1.value = 20;
console.log(obj1, obj2);
