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
