// synchronous programming vs asynchronous programming
// synchronous programming

// ============== setTimeout ===============

console.log("script start");
function hello() {
  console.log("Inside setTimeout");
}

const id = setTimeout(hello, 1000); // take time in miliSecond and return an id
console.log("setTimeout id is : ", id);
console.log("clearing time out ");
clearTimeout(id); // clear setTimeout with id

console.log("script end");

// =============== setInterval ===============

console.log("setInterval script start");

const id1 = setInterval(() => {
  console.log(Math.floor(Math.random() * 100));
}, 1000);

setTimeout(() => {
  clearInterval(id1);
  console.log("setInterval clear");
}, 5000); // clear setInterval in interval of 5 second

console.log("setInterval script end");

// =============== understand callback ===========

function getTwoNumberAndAdd(number1, number2, onSuccess, onFailure) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    onSuccess(number1, number2);
  } else {
    onFailure();
  }
}

getTwoNumberAndAdd(
  4,
  4,
  (num1, num2) => {
    console.log(num1 + num2, " <==  Added value is here ");
  },
  () => {
    console.log("please number only ");
  }
);
