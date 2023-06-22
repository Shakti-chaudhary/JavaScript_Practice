// ================= Stacks ========================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(data) {
    if (data === undefined) {
      this.top = null;
      this.length = 0;
    } else {
      const newNode = new Node(data);
      this.top = newNode;
      this.length = 1;
    }
  }

  push(data) {
    const newNode = new Node(data);
    const current = this.top;
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = current;
      this.top = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    const current = this.top;
    this.top = current.next;
    current.next = null;

    this.length--;
    return current;
  }
}

// =========== Creating stack ====================

const stack = new Stack(32);
console.log(stack);

const stack1 = new Stack();
console.log(stack1);
console.log(stack1.push(7));
console.log(stack1.push(12));
console.log(stack1.push(15));
console.log(stack1);

console.log(stack1.pop());

console.log(stack.pop());
console.log(stack);
