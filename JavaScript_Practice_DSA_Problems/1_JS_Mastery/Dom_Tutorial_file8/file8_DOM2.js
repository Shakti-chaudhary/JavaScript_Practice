// ===== Static list vs Live list =================

// querySelectorAll gives static list degi
// getElementBy---- gives live list

const listItems = document.querySelectorAll(".todo-list li");

const ul = document.querySelector(".todo-list");
const listItems1 = ul.getElementsByTagName("li");

const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
ul.appendChild(sixthLi);

console.log(listItems);
console.log(listItems1);

// how to get the dimension of element

// height weidth

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect();
const info1 = sectionTodo.getBoundingClientRect().width;

console.log(info);
console.log(info1, " width ");
