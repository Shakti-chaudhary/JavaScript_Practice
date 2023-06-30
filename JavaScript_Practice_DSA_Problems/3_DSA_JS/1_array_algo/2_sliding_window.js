//   ================ Sliding window =================
// Q: Given an array, return true if there are
//  two elements within a window of size k with the same value.

function hasDuplicates(array, k) {
  let window = new Set();
  let left = 0;
  for (let right in array) {
    if (window.size >= k) {
      window.delete(array[left]);
      left++;
    }
    if (window.has(array[right])) return true;
    window.add(array[right]);
  }
  return false;
}

console.log(hasDuplicates([1, 2, 3, 2, 3, 3], 3));
