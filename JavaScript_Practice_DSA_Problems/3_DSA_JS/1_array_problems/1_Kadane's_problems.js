// ============ Kadane's problems ======================
// Problem 1. https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function (nums) {
  let finalSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let L = 0;
  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
      L = i;
    }

    currentSum += nums[i];
    finalSum = Math.max(finalSum, currentSum);
  }
  return finalSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));

// Problem 2. https://leetcode.com/problems/maximum-sum-circular-subarray/

function kadaneMin(nums) {
  let finalSum = nums[0];
  let minSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    minSum = Math.min(minSum + nums[i], nums[i]);
    finalSum = Math.min(finalSum, minSum);
  }
  return finalSum;
}

function kadaneMax(nums) {
  let finalSum = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(maxSum + nums[i], nums[i]);
    finalSum = Math.max(finalSum, maxSum);
  }
  return finalSum;
}

var maxSubarraySumCircular = function (nums) {
  let sum = nums.reduce((acc, val) => acc + val, 0);
  let minSum = kadaneMin(nums);
  let maxSum = kadaneMax(nums);
  let circularSum = sum - minSum;

  if (maxSum > 0) {
    return Math.max(circularSum, maxSum);
  } else {
    return maxSum;
  }
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));
console.log(maxSubarraySumCircular([-3, -2, -3]));

// https://leetcode.com/problems/longest-turbulent-subarray/

function maxTurbulenceSize(arr) {
  let maxLength = 1;
  let currentLength = 1;
  let prevDiff = 0;

  for (let i = 1; i < arr.length; i++) {
    const diff = arr[i] - arr[i - 1];

    if (diff * prevDiff < 0) {
      currentLength += 1;
    } else if (diff !== 0) {
      currentLength = 2;
    } else {
      currentLength = 1;
    }
    maxLength = Math.max(maxLength, currentLength);
    prevDiff = diff;
  }

  return maxLength;
}

console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]));
console.log(maxTurbulenceSize([4, 8, 12, 16]));
console.log(maxTurbulenceSize([100]));
