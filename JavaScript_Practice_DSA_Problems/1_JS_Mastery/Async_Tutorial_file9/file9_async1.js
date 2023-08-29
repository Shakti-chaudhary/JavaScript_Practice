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

// xhr.onload = function () {
//   console.log("readyState : ", xhr.readyState);
//   const data = JSON.parse(xhr.response);
//   console.log(data);
// };

xhr.send();

//  =========== error handling =====================

const xhr2 = new XMLHttpRequest(); // for error handling

xhr2.open("GET", "https://jsonplaceholder.typicode.com/postss"); // error in link

xhr2.onload = () => {
  if (xhr2.status >= 200 && xhr2.status < 300) {
    console.log("readyState : ", xhr.readyState);
    const data = JSON.parse(xhr2.response);
    console.log(data);
  } else {
    console.log("something went wrong");
  }
};

xhr2.send();

// ============== Promisifying XHR request ===================

function sendRequest(method, url) {
  return new Promise(function (resolve, reject) {
    const xhr3 = new XMLHttpRequest();
    xhr3.open(method, url);
    xhr3.onload = function () {
      if (xhr3.status >= 200 && xhr3.status < 300) {
        resolve(xhr3.response);
      } else {
        reject(new Error("Something went wrong "));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Something went wrong "));
    };
    xhr3.send();
  });
}

sendRequest("GET", URL)
  .then((response) => {
    const data = JSON.parse(response);
    console.log("check for error ");

    return data;
  })
  .then((data) => {
    console.log(data);
    const id = data[3].id;
    return id;
  })
  .then((id) => {
    const url = `${URL}/${id}sss`;
    console.log(url);
    return sendRequest("GET", url);
  })
  .then((newResponse) => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
  })
  .catch((error) => {
    console.log("Error is : ", error);
  });

// =================== Fetch API ====================

const fData = fetch(URL);
fData
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something error in fetch : !!!");
    }
  })
  .then((data) => {
    console.log(data[5]);
  })
  .catch((error) => {
    console.log("inside fetch catch");
    console.log(error);
  });

// Fetch Post Method

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

// =================== Async Await ===================

async function getPosts() {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Something error in async await !!!");
  }
  const data = await response.json();
  return data; // return promise
}

getPosts()
  .then((data) => {
    console.log(data[2]);
  })
  .catch((error) => {
    console.log(error);
  });
