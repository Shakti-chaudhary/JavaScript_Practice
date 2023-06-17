// =============== function expression ==================

// function declaration

function singhHappyBirthday() {
  console.log("Happy Birthday to you!");
}

singhHappyBirthday();

function twoPlusFour() {
  console.log(2 + 4);
}

twoPlusFour();

function threePlusFour() {
  return 3 + 4;
}
const returnValue = threePlusFour();
console.log(returnValue);

// function firstCharacter

function firstChar(str) {
  return str[0].toUpperCase(); // convert first char to uppercase
}

console.log(firstChar("hello"));

// =========================================================

// function expression

// Anonymous function
const printLog = function () {
  console.log("Hello");
};

printLog();

// ============= Arrow function ==================

const printLog2 = () => {
  console.log("This is arrow function.");
};

printLog2();

const isEven = (num) => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(1));

// =================== Hoisting =====================

// We can call a function before it is defined..
// It worked in function declaration case
// but not in function expression and arrow function case

hello();

function hello() {
  console.log("Hello");
}

// ================== Function inside function ======

function app() {
  const myFunc = () => {
    console.log("hello from myFunc");
  };

  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const multiplyTwo = (num1, num2) => num1 * num2;

  console.log("inside app");
  myFunc();
  console.log(addTwo(3, 5));
}

app();

//  ================= Lexical scope ==================

function myApp() {
  const myVar = "hello";
  function myFunc() {
    const myVar = "hi";
    function callMe() {
      const myVar = "hey";
      console.log("function callMe");
      let mydd = myVar;
      console.log(mydd);
    }
    callMe();
  }
  myFunc();
  console.log(myVar);
}
myApp();
