// ============ fast and slow pointers =====================
// Floyd's tortoise and hare algorithm

// Q: Find the middle of a linked list with two pointers.
// Time: O(n), Space: O(1)

function middleOfList(head) {
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// Determine if the linked list contains a cycle.
// Time: O(n), Space: O(1)

function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Determine if the linked list contains a cycle and
// return the beginning of the cycle, otherwise return null.
// Time: O(n), Space: O(n)

function cycleStart(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  let slow2 = head;
  while (slow !== slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }

  return slow;
}

// formula of 2* slow = fast
// 2*(P+C-X) = P+C+C-X
// P-X = 0
// P = X
