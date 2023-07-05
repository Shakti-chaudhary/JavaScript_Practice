// ============== Sliding window problems ==================
// Problem 1. https://leetcode.com/problems/contains-duplicate-ii/

function containsNearbyDuplicate(nums, k) {
  let map = new Map();

  let left = 0,
    right = 0;

  for (let i = 0; i < nums.length; i++) {
    if (right - left > k) {
      map.delete(nums[left]);
      left++;
    }

    right++;

    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], true);
    }
  }

  return false;
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

// Problem 2. https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

function numOfSubarrays(nums, k, threshold) {
  let left = 0;
  let ans = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i - left >= k) {
      sum -= nums[left];
      left++;
    }

    if (i - left === k - 1 && Math.floor(sum / k) >= threshold) {
      ans++;
    }
  }

  return ans;
}
console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
