// synchronous programming vs asynchronous programming

// synchronous programming

// setTimeout

console.log("script start");
function hello() {
  console.log("Inside setTimeout");
}
setTimeout(hello, 1000);
console.log("script end");
