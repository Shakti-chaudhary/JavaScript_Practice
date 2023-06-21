// =============== Array methods =====================

// 1 toString

const fruits = ["banana", "orange"];
const fruitsString = fruits.toString();

console.log(fruitsString);

// 2 join

const fruits1 = ["apple", "banana", "orange"];
const fruitsString1 = fruits1.join(", ");

console.log(fruitsString1);

// 3 push

const fruits2 = ["apple", "banana"];

fruits2.push("orange", "grape");

console.log(fruits2);

// 4 pop

const numbers = [1, 2, 3, 4, 5];

const removedNumber = numbers.pop();

console.log(numbers);
console.log(removedNumber);

// shift

const colors = ["red", "green", "blue"];

const removedColor = colors.shift();

console.log(colors);
console.log(removedColor);

// unshift

const animals = ["lion", "tiger"];

animals.unshift("elephant", "giraffe");

console.log(animals);

// concat

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const combinedNumbers = numbers1.concat(numbers2);

console.log(combinedNumbers);

// sort

console.log(combinedNumbers.sort((a, b) => a - b));

// splice

const numbers4 = [1, 2, 3, 4, 5];
const removedElements = numbers4.splice(2, 2, 6, 7);

console.log(numbers4);
console.log(removedElements);

// slice

const vegetables = ["carrot", "broccoli", "cabbage", "spinach", "tomato"];
const slicedVegetables = vegetables.slice(1, 4);

console.log(slicedVegetables);

// reverse

console.log(vegetables.reverse());

// isArray

console.log(Array.isArray(vegetables));

// indexOf

console.log(vegetables.indexOf("carrot"));

// lastIndexOf

vegetables.splice(2, 0, "carrot");
console.log(vegetables);

console.log(vegetables.lastIndexOf("carrot"));

// find

const numbers5 = [10, 20, 30, 40, 50];
const foundNumber = numbers5.find((element) => element > 25);

console.log(foundNumber);

// findIndex

console.log(numbers5.findIndex((element) => element === 40));

// includes

console.log(vegetables.includes("carrot"));
