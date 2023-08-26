// AJAX : asynchronous javascript and XML

// HTTP request

// is a set of "web development techniques"
// using many web technologies on the "client-side"
// to create asynchronous web applications.

// With Ajax, web application can send and retrieve
// data from a server asynchronously (in the background)
// without interfering with the display and
// behaviour of the existing page

// We don't use data in XML format anymore.
// we use JSON now.

// we have 3 most common ways to create and send request to server
// 1.) xmlRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)

// =========================================================
const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", URL);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   }
// };

xhr.onload = function () {
  console.log("readyState : ", xhr.readyState);
  const data = JSON.parse(xhr.response);
  console.log(data);
};

xhr.send();
