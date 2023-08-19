// ============ intro to event =======================

// click

function clickMe() {
  console.log("you clicked me !!!!");
}
const btn = document.addEventListener("click", clickMe);

// event object

// (e) ==> event object

function clickMe(e) {
  console.log("you clicked me !!!!", e);
}
const btn2 = document.addEventListener("click", clickMe);

// keypress event

const body = document.body;

body.addEventListener("keypress", (e) => {
  console.log(e.key);
});

// mouseoover event

const mainButton = document.querySelector(".btn-headline");

mainButton.addEventListener("mouseover", () => {
  console.log("mouseOver event occurred!!!");
});

mainButton.addEventListener("mouseleave", () => {
  console.log("mouseLeave event occurred!!!");
});
