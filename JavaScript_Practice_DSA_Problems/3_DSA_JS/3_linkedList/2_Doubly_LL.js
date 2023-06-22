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
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    let counter = 0;
    const middleIndex = Math.floor(this.length / 2);

    if (index < middleIndex) {
      while (counter < index) {
        temp = temp.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      temp = this.tail;
      while (counter > index) {
        temp = temp.prev;
        counter--;
      }
    }

    return temp;
  }
  set(index, data) {
    let temp = this.get(index);
    if (temp) {
      temp.data = data;
      return true;
    }
    return false;
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

// ================= Get  =======================

console.log(newList.push(0));
console.log(newList.push(5));

console.log(newList.get(0));
console.log(newList.get(1));
console.log(newList.get(2));
console.log(newList.get(3));
console.log(newList.get(4));

// ================ Set ========================

console.log(newList1.set(0, 100));
newList1.push(100);
console.log(newList1.set(0, 100));
console.log(newList1);
console.log(newList1.set(1, 77));

console.log(newList1.set(0, 12));
console.log(newList1);
