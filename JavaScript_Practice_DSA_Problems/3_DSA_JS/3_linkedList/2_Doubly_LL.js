// ============ Doubly LinkedList =================

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(data) {
    if (data === undefined) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      const newNode = new Node(data);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
  unshift(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (this.length === 0) return undefined;
    const temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

// ============== Creating DLL ====================

const newList = new DoublyLinkedList();

// Push

newList.push(1);
newList.push(2);
newList.push(5);
console.log(newList);

const newList1 = new DoublyLinkedList(22);
console.log(newList1);

// =============== Pop ==========================

console.log(newList.pop());
console.log(newList);

console.log(newList1.pop());
console.log(newList1);
console.log(newList1.pop());

// ============ Unshift ======================

newList.unshift(61);
console.log(newList);

newList1.unshift(3);
console.log(newList1);

// ============= Shift ========================

console.log(newList.shift());
console.log(newList);

newList1.shift(3);
console.log(newList1);
console.log(newList1.shift());
