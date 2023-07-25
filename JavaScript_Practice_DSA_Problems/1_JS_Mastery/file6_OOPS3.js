// ================= Class =======================
// 2015 / es6
// class keyword
// class are fake { Based on prototypes , this and new keyword }

class CreateUser {
  // Constructer work as constructer function
  constructor(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} years old`;
  }
}

const user = new CreateUser("rohit", "kumar", "ahuj1@gmail.com", 18, "india");
console.log(user);
console.log(user.about());
// console.log(Object.getPrototypeOf(user));

// ============= Example using class keyword =========================

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating`;
  }
  isSuperCute() {
    return this.age <= 1;
  }
  isCute() {
    return true;
  }
}

const animal1 = new Animal("rich", 2);
const animal2 = new Animal("tom", 1);
console.log(animal1.eat());
console.log(animal2.isSuperCute());

// ====== Inheritence ========

class Dog extends Animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  eat() {
    return `Modified Eat : ${this.name} is eating`;
  }
  run() {
    return `${this.name} is running at ${this.speed} kmph`;
  }
}

let doggy = new Dog("pitbull", 3, 35);
console.log(doggy.eat());
console.log(doggy.run());

// ================== Getters and Setters ========================

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static info() {
    // Static methods
    return `this is Person class `;
  }

  static str = "static str in person class"; // Static properties

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    let [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("harsh", "singh", 5);
console.log(person1.firstName);

person1.fullName = "mohit kumar";
console.log(person1.fullName);

// ========= Static methods and properties ==================

console.log(Person.info());
console.log(Person.str);
