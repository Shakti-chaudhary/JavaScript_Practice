class Cookie {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
  setColor(color) {
    this.color = color;
  }
}

let cookieOne = new Cookie("red");
console.log(cookieOne);
console.log(cookieOne.color);
console.log(cookieOne.getColor());
cookieOne.setColor("blue");
console.log(cookieOne.getColor());
