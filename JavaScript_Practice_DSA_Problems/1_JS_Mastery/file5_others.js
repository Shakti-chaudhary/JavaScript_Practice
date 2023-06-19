// ================== Iterables ===================
// for of loop work on them
// string , array are iterable

const firstName = "Harshit";
for (let char of firstName) {
  console.log(char);
}

const items = ["item1", "item2", "item3"];
for (const item of items) {
  console.log(item);
}

// objects are not iterable

// array like object
// consist length property
// can access through index
// example :- String

// ================== Sets ======================

// Set (it is iterable)
// store data
// sets also have its own methods
// no index-based access
// order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([3, 2, 4, 5, 2, 4, 6]);
numbers.add(1);
console.log(numbers);
console.log(numbers.has(2));

for (const iter of numbers) {
  console.log(iter);
}
