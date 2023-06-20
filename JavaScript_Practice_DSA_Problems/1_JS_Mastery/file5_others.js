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
console.log(numbers.size);

for (const iter of numbers) {
  console.log(iter);
}

// ================= Maps ======================

// map is an iterable

// store data in ordered key-value pairs (like object)

// duplicate keys are not allowed

// different between maps and objects

// objects can only have string or symbol as keys

// in maps you can use anything as key like array,number,string

// key value pair
const person = new Map();
person.set("name", "Rohan");
person.set("age", 23);
person.set(1, "one");
console.log(person);
console.log(person.get("name"));
console.log(person.keys());

for (let [key, value] of person) {
  console.log(key, "=>", value);
}

let person1 = new Map([
  ["name", "Rohan"],
  ["age", 23],
]);
console.log(person1);
