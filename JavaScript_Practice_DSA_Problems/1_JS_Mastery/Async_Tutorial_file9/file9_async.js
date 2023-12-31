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

// callbacks , callback hell , pyramid of doom // check online
// asynchronous programming

// ================= Promise =====================

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("friedRice");
  } else {
    reject("Could't make it");
  }
});

// consume
// how to consume

friedRicePromise
  .then(
    (myfriedRice) => {
      console.log("lets eat ", myfriedRice);
    }
    //   (error) => {
    //     console.log(error, " Error ***");
    //   } //? work as .catch also
  )
  .catch((error) => {
    console.log(error, " Error ***");
  });

// function that return promise

function ricePromise() {
  return new Promise((resolve, reject) => {
    if (
      bucket.includes("vegetables") &&
      bucket.includes("salt") &&
      bucket.includes("rice")
    ) {
      resolve("friedRice");
    } else {
      reject("Could't make it");
    }
  });
}

ricePromise()
  .then(
    (myfriedRice) => {
      console.log("Function returns a promise in this example: ", myfriedRice);
    }
    //   (error) => {
    //     console.log(error, " Error ***");
    //   } //? work as .catch also
  )
  .catch((error) => {
    console.log(error, " Error ***");
  });

// promise && setTimeout

// I want to resolve / reject promise after 2 seconds

function myPromise() {
  return new Promise((resolve, reject) => {
    const value = true;
    setTimeout(() => {
      if (value) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
}

myPromise()
  .then(() => {
    console.log("Resolved: !!!");
  })
  .catch(() => {
    console.log("Rejected : !!!");
  });

// ============= Promise.resolve
// ============= Promise chaining
// then() // then method hamesha promise return karta h

function myPromise() {
  return new Promise((resolve, reject) => {
    resolve("foo");
  });
}

myPromise()
  .then((value) => {
    console.log(value);
    value += " bar ";
    return value; // return Promise.resolve(value)
  })
  .then((value) => {
    console.log(value);
  });
