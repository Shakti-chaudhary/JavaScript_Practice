// ================ Objects in JavaScript =============
// objects store key value pairs
// objects don't have index

// how to create an object

const person = {
  name: "John",
  age: 22,
  hobbies: ["Sports", "Cooking", "Music"],
};
console.log(person);

// how to access data from object

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);
console.log(person.hobbies[0]);

// how to add key value pairs to an object

person.gender = "Male";
console.log(person);

//  difference between dot and bracket notation
const key = "email";
const value = "nqH9R@example.com";

person["country"] = "India";
console.log(person.gender);
console.log(person["gender"]);
console.log(person["country"]);

person[key] = value;
console.log(person[key]);

// how to iterate object

// for in loop

for (const key in person) {
  console.log(key);
  console.log(typeof key);
  console.log(person[key]);
  console.log(typeof person[key]);
}

let keys = Object.keys(person);
console.log(keys);

// for of loop

for (const iterator of Object.keys(person)) {
  console.log(person[iterator]);
}
