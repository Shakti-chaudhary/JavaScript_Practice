// =============== Prototypes ========================
// javascript function ===> function + object

function hello() {
  console.log("hello world");
}
console.log(hello.name);

// you can add your own properties

hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

// function provides more usefull properties.

console.log(hello.prototype); // gives empty object

// only function provide prototype property

hello.prototype.abc = "abc";
console.log(hello.prototype);

// ====================================================
function createUser(firstName, lastName, email, age, address) {
  // const user = {};
  const user = Object.create(createUser.prototype); // proto chaining
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
let user = createUser("Rachit", "Kumar", "rachit@gmail.com", 19, "India");
console.log(user.about());

// ========================================================
