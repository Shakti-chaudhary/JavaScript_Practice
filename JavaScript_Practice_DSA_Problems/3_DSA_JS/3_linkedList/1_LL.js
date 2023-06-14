// ========= LL BIG O ==================

// Big O(n) - Insertion to last and middle
// Big O(1) - Insertion to front
// Big O(n) - Deletion from last and middle
// Big O(1) - Deletion from front
// Big O(n) - Search

//  ========= LinkedList ===========

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
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
  // ============ push method =====================
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // ============ pop method ======================
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }
  // ============== UnShift ======================
  unshift(data) {
    const newNode = new Node(data);
    const currentHead = this.head;
    if (!currentHead) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    currentHead.next = null;
    return currentHead;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, data) {
    let current = this.get(index);
    if (current) {
      current.data = data;
      return true;
    }
    return false;
  }

  insert(index, data) {
    if (index === 0) return this.unshift(data);
    if (index === this.length) return this.push(data);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(data);
    let current = this.get(index - 1);
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return true;
  }
  remove(index, data) {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index >= this.length) return undefined;

    let before = this.get(index - 1);
    let current = before.next;
    before.next = current.next;
    current.next = null;
    this.length--;
    return current;
  }
  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next = current.next;
    let prev = null;
    while (next) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }
}

// ===== Creating linked list with one data ======

let newLinkedList = new LinkedList(1);

// push method

newLinkedList.push(2);
console.log(newLinkedList);
console.log(newLinkedList.length);

// ===== Creating linked list with no data ======

let newLinkedList1 = new LinkedList();
console.log(newLinkedList1);
newLinkedList1.push(3);
newLinkedList1.push(12);
newLinkedList1.push(931);
newLinkedList1.push(365);
console.log(newLinkedList1);

// ============ Pop method ===================

console.log(newLinkedList.pop());
console.log(newLinkedList);
console.log(newLinkedList.length);

newLinkedList.pop();
console.log(newLinkedList);

console.log(newLinkedList.pop());
console.log(newLinkedList);

// ============ Unshift method ================

console.log(newLinkedList.unshift(14));
console.log(newLinkedList.unshift(4));

// ============ Shift method ================

console.log(newLinkedList.shift());
console.log(newLinkedList);
console.log(newLinkedList.shift());
console.log(newLinkedList);
console.log(newLinkedList.shift());
console.log(newLinkedList);

//  ============ Get method ================

console.log(newLinkedList1.get(2));
console.log(newLinkedList1.get(2).data);

//  ============ Set method ================

console.log(newLinkedList1.set(2, 44));
console.log(newLinkedList1.get(2));
console.log(newLinkedList1.get(2).data);

//  ============ Insert method ================

let newLL = new LinkedList();
console.log(newLL);
console.log(newLL.get(0));

newLL.insert(0, 1);
console.log(newLL.insert(1, 2));
console.log(newLL.insert(1, 4));

console.log(newLL);
console.log(newLL.length);

// ============ Remove method ================

console.log(newLL.remove(3));
console.log(newLL.remove(1));
console.log(newLL.remove(0));
console.log(newLL);
console.log(newLL.length);

// ============ Reverse method ================

console.log(newLinkedList1);
console.log(newLinkedList1.reverse());
