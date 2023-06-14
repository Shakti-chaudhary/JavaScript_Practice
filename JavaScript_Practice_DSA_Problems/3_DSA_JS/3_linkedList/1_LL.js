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
    const newNode = new Node(data);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // ============ push method =====================
  push(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
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
}
let newLinkedList = new LinkedList(1);
newLinkedList.push(2);
console.log(newLinkedList);
console.log(newLinkedList.length);
console.log(newLinkedList.pop());
console.log(newLinkedList);
console.log(newLinkedList.length);
newLinkedList.pop();
console.log(newLinkedList);
console.log(newLinkedList.pop());
console.log(newLinkedList);
