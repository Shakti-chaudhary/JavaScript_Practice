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

function characterReplacement(str, k) {
  let freq = new Map();
  let maxFreq = 0,
    maxLen = 0,
    left = 0;

  for (let i in str) {
    freq.set(str[i], (freq.get(str[i]) || 0) + 1);
    maxFreq = Math.max(maxFreq, freq.get(str[i]));

    while (i - left + 1 - maxFreq > k) {
      freq.set(str[left], freq.get(str[left]) - 1);

      if (freq.get(str[left]) === 0) {
        freq.delete(str[left]);
      }

      left++;
    }
    maxLen = Math.max(maxLen, i - left + 1);
  }
  return maxLen;
}
console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("abccde", 1));
console.log(characterReplacement("aabccbb", 2));
