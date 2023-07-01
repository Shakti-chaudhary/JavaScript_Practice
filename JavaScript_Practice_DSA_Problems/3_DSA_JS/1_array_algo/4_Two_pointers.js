// ============= Two pointers ==================
//  Q: Check if an array is a palindrome

function isPalindrome(array) {
  let L = 0;
  let R = array.length - 1;
  while (L < R) {
    if (array[L] !== array[R]) {
      return false;
    }
    L++;
    R--;
  }
  return true;
}
console.log(isPalindrome([1, 2, 7, 7, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 7, 2, 1])); // false

// =============================================
// Q: given a sorted array of integers, return
// the indices of two elements (in different position)
// that sum up to the target value. Assume there is
// exactly one solution . O(n).

function targetSum(array, target) {
  let L = 0,
    R = array.length - 1;
  while (L < R) {
    if (array[L] + array[R] > target) {
      R--;
    } else if (array[L] + array[R] < target) {
      L++;
    } else {
      return [L, R];
    }
  }
  return false;
}

console.log(targetSum([-1, 2, 3, 4, 7, 9], 7));

// ============================================
// Q: move all unique values in the array to the front in-place.

function removeDuplicatesInPlace(array) {
  let L = 1;
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      array[L] = array[i];
      L++;
    }
  }
  return L;
}

const arr = [1, 2, 2, 3, 4, 4, 5];
let length = removeDuplicatesInPlace(arr);
console.log(arr.slice(0, length));
