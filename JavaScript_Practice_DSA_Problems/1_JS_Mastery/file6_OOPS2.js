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

// ================= New keyword =====================
// Constructer function { Create object }

function CreateUser1(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
CreateUser1.prototype.about = function () {
  console.log(this.firstName, " age is ", this.age);
};
const user1 = new CreateUser1("harshit", 6);

// new keyword
// 1. empty object this = {}
// object.create(createUser.prototype);

user1.about();

for (let key in user1) {
  console.log(key); // give all keys including prototypes
  if (user1.hasOwnProperty(key)) {
    console.log(key); // give only object main keys exclude prototypes key
  }
}
