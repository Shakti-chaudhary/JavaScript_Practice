// Call Stack

function funcThree() {
  console.log("hello from funcThree");
}
function funcTwo() {
  funcThree();
  console.log("hello from funcTwo");
}

function funcOne() {
  funcTwo();
  console.log("hello from funcOne");
}

funcOne();

// ===== Recursion problem { Factorial } ============

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
