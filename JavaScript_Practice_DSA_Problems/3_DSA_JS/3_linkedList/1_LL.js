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
}
let newLinkedList = new LinkedList(1);
newLinkedList.push(2);
console.log(newLinkedList);
