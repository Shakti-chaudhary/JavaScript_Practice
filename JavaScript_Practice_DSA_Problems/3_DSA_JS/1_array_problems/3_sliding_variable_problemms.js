// ========= Sliding window variable problems ============
// Problem 1. https://leetcode.com/problems/minimum-size-subarray-sum/

function minSubArrayLen(nums, target) {
  let left = 0;
  let total = 0;
  let length = nums.length;

  for (let i = 0; i < nums.length; i++) {
    total += nums[i];

    while (total >= target) {
      length = Math.min(i - left + 1, length);
      total -= nums[left];
      left++;
    }
  }
  if (length === nums.length) {
    return 0;
  } else {
    return length;
  }
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
console.log(minSubArrayLen([1, 4, 4], 4));
console.log(minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11));

// Problem 2. https://leetcode.com/problems/longest-substring-without-repeating-characters/

function lengthOfLongestSubstring(s) {
  let map = new Map();
  let L = 0;
  let length = 0;

  for (let R in s) {
    if (map.has(s[R])) {
      length = Math.max(length, R - L);
      L = R;
      map.clear;
    }
    map.set(s[R], R);
  }
  return length;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

// Problem 3. https://leetcode.com/problems/longest-repeating-character-replacement/

function characterReplacement(s, k) {
  let map = new Map();
  let n = k;
  let L = 0;
  let length = 0;

  for (let R in s) {
    if (!map.has(s[R])) {
      map.set(s[R], R);
    }

    if (s[L] !== s[R] && n > 0) {
      length = Math.max(length, R - L);
      n--;
    } else {
      n = k;
      L = map.has(s[R]);
    }
  }
  return length;
}
console.log(characterReplacement("ABAB", 2));
