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
