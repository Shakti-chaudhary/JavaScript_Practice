// ============== Dom learn ======================
// DOM
// document object model
// overview
// how to use
// deep study

// select element usig get element by id

console.log("hello word");
console.log(document.getElementById("main-heading"));

// select element using query selector

console.log(document.querySelector("#main-heading"), " Query selector!");

const header = document.querySelector(".header");
console.log(header);

const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);

// change text
// textContent and innerText

const mainheading1 = document.getElementById("main-heading");
console.log(mainheading1.textContent);
