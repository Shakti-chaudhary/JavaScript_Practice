// ========= Sliding window problems ===========
// Q: Find the length of the longest subarray,
// with the same value in each position .

function longestSubarray(array) {
  let length = 0;

  let L = 0;
  for (let R in array) {
    if (array[R] !== array[L]) {
      L = R;
    }
    length = Math.max(length, R - L + 1);
  }
  return length;
}
console.log(longestSubarray([4, 2, 2, 3, 3, 3])); // 3

// ==============================================
// Q: Find the minimum length subarray, where the sum is
//  greater than or equal to the target. Assume all values are positive.

function findMinLength(array, value) {
  let minLength = array.length;
  let sum = 0;
  let left = 0;
  for (let right in array) {
    sum += array[right];
    while (sum >= value) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= array[left];
      left++;
    }
  }
  return minLength;
}

console.log(findMinLength([2, 3, 1, 2, 4, 3], 6)); // 2
