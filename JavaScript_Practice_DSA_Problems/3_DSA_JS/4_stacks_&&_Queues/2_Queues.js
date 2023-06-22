// ================ Queue ================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(data) {
    if (!data) {
      this.first = null;
      this.last = null;
      this.length = 0;
    } else {
      this.first = new Node(data);
      this.last = this.first;
      this.length = 1;
    }
  }
  enqueue(data) {
    let newNode = new Node(data);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }
  dequeue() {
    if (this.length === 0) return undefined;

    let current = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = current.next;
      current.next = null;
    }

    this.length--;
    return current;
  }
}

//  =========== Creating Queue ==============

const queue = new Queue(11);
console.log(queue);

const queue2 = new Queue();
console.log(queue2);

// enqueue

console.log(queue2.enqueue(21));
console.log(queue2.enqueue(44));
console.log(queue2.enqueue(1));
console.log(queue2.enqueue(2));
console.log(queue2);

// dequeue

console.log(queue2.dequeue());
console.log(queue2);

console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
