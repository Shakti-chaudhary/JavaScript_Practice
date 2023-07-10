// =========== Linked List Problems ==============
// Problem 1. Middle of the Linked List

function middleNode(head) {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Problem 2. Maximum Twin Sum of a Linked List
// https://youtu.be/EpgVqL4Ijhk

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function maximumTwinSum(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let nextNode,
    prev = null;

  while (slow) {
    nextNode = slow.next;
    slow.next = prev;
    prev = slow;
    slow = nextNode;
  }

  let current = head;
  let maxSum = 0;

  while (prev) {
    maxSum = Math.max(maxSum, prev.val + current.val);
    prev = prev.next;
    current = current.next;
  }

  return maxSum;
}

// Create the linked list: 5 -> 4 -> 2 -> 1
const head = new ListNode(5);
head.next = new ListNode(4);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(maximumTwinSum(head)); // Output: 6

// Problem 3. Linked list cycle

function hasCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

// Promlem 4. Linked list cycle ii

function detectCycle(head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head,
    fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) {
      break;
    }
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  let slow2 = head;

  while (slow2 !== slow) {
    slow = slow.next;
    slow2 = slow2.next;
  }
  return slow2;
}

// Problem 5. Find the Duplicate Number
// https://youtu.be/wjYnzkAhcNk

function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  // Move slow and fast pointers
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Find the entry point of the cycle
  let ptr1 = nums[0];
  let ptr2 = slow;
  while (ptr1 !== ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2];
  }

  return ptr1;
}

console.log(findDuplicate([1, 3, 4, 2, 2]));
console.log(findDuplicate([3, 1, 3, 4, 2]));
