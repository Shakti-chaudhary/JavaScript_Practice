// =================== event bubbling ===================

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", () => {
  console.log("you clicked on child");
});

parent.addEventListener("click", () => {
  console.log("you clicked on parent");
});

grandparent.addEventListener("click", () => {
  console.log("you clicked on grandparent");
});

// =================== event capturing ===================

parent.addEventListener(
  "click",
  () => {
    console.log("capture on parent");
  },
  true
);

grandparent.addEventListener(
  "click",
  () => {
    console.log("capture on grandparent");
  },
  true
);

// =================== event delegation ===================

const grandparent1 = document.querySelector(".grandparent");
grandparent1.addEventListener("click", (e) => {
  console.log(e.target);
});
