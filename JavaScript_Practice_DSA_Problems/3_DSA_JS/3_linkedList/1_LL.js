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

// ============ Pop method ================

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
