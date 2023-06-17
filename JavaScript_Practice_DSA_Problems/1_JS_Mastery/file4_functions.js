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
