// block scope vs function scope
// let and const are block scope
// var is function scope

// block scope

{
  let name = "John";
  console.log(name);
} // can't access name outside of block

{
  var name = "Robert";
}
console.log(name);

// function scope

function myApp() {
  if (1) {
    let firstName = "John";
    console.log(firstName);
  }
  if (1) {
    var firstName = "Mohan";
  }
  console.log(firstName); // can't access firstName outside of function
}
myApp();
