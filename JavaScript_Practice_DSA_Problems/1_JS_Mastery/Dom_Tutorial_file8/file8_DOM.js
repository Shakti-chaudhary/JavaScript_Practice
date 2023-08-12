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
mainheading1.textContent = "This is something else ";
console.log(mainheading1.textContent); // also give all text hides text also

console.log(mainheading1.innerText, "{ InnerText }"); // only visible text

// Change the style of elements

const mainHeading = document.querySelector("#main-heading");
mainHeading.style.color = "blue";
mainHeading.style.backgroundColor = "yellow";

// get and set attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href")); // get attribute
link.setAttribute("href", "#changeAttribute");
console.log(link.getAttribute("href").slice(1)); // get attribute

// ===== get multiple elements using getElements by class name ========

const navItems = document.getElementsByClassName("nav-item"); // return HTMLCollection
console.log(navItems[0]);

const navItems2 = document.getElementsByTagName("a"); // return HTMLCollection
console.log(navItems2);

// Loop
// we can't use forEach method to iterate through HTMLCollection
// simple for loop
// for of loop
// forEach   { Array like object ---> indexing , length property }

// for (let i = 0; i < navItems.length; i++) {
//   const navItem = navItems2[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// }

// for (let navItem of navItems2) {
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
// }

// changing HTMLCollection to array to use forEach methods

let navItems3 = Array.from(navItems2);
navItems3.forEach((navItem) => {
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "green";
});

// ========= get multiple elements items using querySelectorAll =======

const navItems1 = document.querySelectorAll("a"); // return NodeList
console.log(navItems1);

// Can use for , for of and forEach loop

// ===================== InnerHTML ==========================

const innerHeadline = document.querySelector(".headline");
// console.log(innerHeadline.innerHTML);
innerHeadline.innerHTML = "<h2>Here I am ! </h2>";
innerHeadline.innerHTML += '<button class= "btn"> Learn More </button>';
