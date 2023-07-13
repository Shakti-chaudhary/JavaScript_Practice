// =========== OOPS / Prototypes ===============

// Methods
// function inside object

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}
function personInfo1(type, number) {
  console.log(
    `person name is ${this.firstName} and age is ${this.age} as a ${type} and no : ${number}`
  );
}

const person1 = {
  firstName: "Ritik",
  age: 8,
  about: personInfo,
};

const person2 = {
  firstName: "mohit",
  age: 18,
  //   about: personInfo,
};

person1.about();
// person2.about();

// ============== This keyword, Window object ===============
// this point to current object scope
// window is global object

console.log(this);

// ========== Call , Bind , Apply ===================

// Call
person1.about.call(person2);
personInfo1.call(person2, "call", 32);

// Apply { pass parameter in array }

personInfo1.apply(person2, ["apply", 32]);

// don't do this mistake

// Bind
const myfunc = person1.about;
console.log(myfunc()); // undefined , this refer now to window object

const myfunc1 = person1.about.bind(person1);
myfunc1();

// ========== This inside arrow function ===============

const person3 = {
  firstName: "Rahul",
  age: 8,
  about: () => {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
  },
};

person3.about();

// =============== Factory functions =====================
// function (that function create object)
// 2. add key value pair
// 3. object ko return krega

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  // const user = {};
  const user = Object.create(userMethods); // proto chaining
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;

  // first way

  // user.about = function () {
  //   return `${this.firstName} is ${this.age} years old`;
  // };
  // user.is18 = function () {
  //   return this.age >= 18;
  // };

  // Second way

  // user.about = userMethods.about;
  // user.is18 = userMethods.is18;

  return user;
}

const user1 = createUser("Rachit", "Kumar", "rachit@gmail.com", 19, "India");
console.log(user1.about(), " is 18 : ", user1.is18());

// ================================================

// offical ecmascript documentation
// __proto__ === [[prototype]]  not same to prototype

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1); // Set __proto__ property obj1 to obj 2

obj2.key3 = "value3";
console.log("key3 : ", obj2.key3, "and key2 : ", obj2.key2);
