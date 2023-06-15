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

// let keys = Object.keys(person);
// console.log(keys);

// for of loop

for (const iterator of Object.keys(person)) {
  console.log(iterator);
  console.log(person[iterator]);
}

// ======================= Computed properties ==================

const key1 = "email";
const key2 = "phone";

const value1 = "nqH9R@example.com";
const value2 = "123456789";

// const object = {
// objkey1 : "myvalue1",
// objkey2 : "myvalue2",
// }

const person1 = {
  [key1]: value1,
  [key2]: value2,
};

// const obj = {};
// obj[key1] = value1;
// obj[key2] = value2;

console.log(person1);

//  ====================== Spread operator =======================

const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "value",
  key3: "value3",
  key4: "value4",
};
const newObject = {
  ...obj1,
  ...obj2,
  key5: "value5",
}; // Overwrite obj1 and obj2 key if they are same

console.log(newObject);

const newObject2 = {
  ..."abc",
}; // indexes add as a key value pair
console.log(newObject2);
