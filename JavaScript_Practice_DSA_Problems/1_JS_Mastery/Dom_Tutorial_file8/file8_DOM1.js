// ================= classList =================
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo);
// sectionTodo.classList.add("bg-dark");
// sectionTodo.classList.remove("container");
console.log(sectionTodo.classList.contains("container"));
sectionTodo.classList.toggle("bg-dark");
sectionTodo.classList.toggle("bg-dark");

// =============== Add new elements to page ================

const todoList = document.querySelector(".todo-list");

// todoList.innerHTML += "<li>New Todo </li>";
// todoList.innerHTML += "<li>teach students </li>";

// document.createElement()
// append
// prepend
// remove

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createTextNode("Teach student");
// // newTodoItem.append(newTodoItemText);
// newTodoItem.textContent = "Teach students";
// todoList.append(newTodoItem); // add to last
// todoList.prepend(newTodoItem); // add to start
// console.log(newTodoItem);

const todo1 = document.querySelector(".todo-list li");
// // todo1.remove();
// // todo1.append();
// console.log(todo1);

// Brfore
// After

// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Student";
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);

// elem.insertAdjacentHTML(where,html)
// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList1 = document.querySelector(".todo-list");
// todoList1.insertAdjacentHTML("beforeend", "<li>hi</li>");

// ============== clone nodes ======================

// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);

// some old methods to support poor IE
// appendChild
// insertBefore
// replaceChild
// removeChild

const ul1 = document.querySelector(".todo-list");

// new element
const li1 = document.createElement("li");
li1.textContent = "appendChild()";

const referenceNode = document.querySelector(".first-todo");
console.log(referenceNode);

// ul1.appendChild(li1);
// ul1.insertBefore(li1, referenceNode);

ul1.replaceChild(li1, referenceNode);
// ul1.removeChild(li1);
