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
}
// ============== Creating DLL ====================

const newList = new DoublyLinkedList();
newList.push(1);
newList.push(2);
newList.push(5);
console.log(newList);

const newList1 = new DoublyLinkedList(22);
console.log(newList1);
