// ============= Kadanes's Algorithm ==================

function kadane(array) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;

  for (let num of array) {
    currentSum = Math.max(currentSum, 0);
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
console.log(kadane([4, -1, 2, -7, 3, 4]));

// ===================================================

// return indexes of max element in array

function slidingWindow(array) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let maxL = 0,
    maxR = 0;
  let L = 0;

  for (let R in array) {
    if (currentSum < 0) {
      currentSum = 0;
      L = R;
    }
    currentSum += array[R];
    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxL = L;
      maxR = R;
    }
  }
  return array.slice(maxL, maxR + 1);
}

console.log(slidingWindow([4, -1, 2, -7, 3, 4]));
