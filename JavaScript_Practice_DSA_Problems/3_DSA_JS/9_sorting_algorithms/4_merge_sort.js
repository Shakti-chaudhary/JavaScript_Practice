//  ================= Merge sort ====================

function merge(array1, array2) {
  let combined = [];
  let index1 = 0;
  let index2 = 0;

  while (index1 < array1.length && index2 < array2.length) {
    if (array1[index1] < array2[index2]) {
      combined.push(array1[index1]);
      index1++;
    } else {
      combined.push(array2[index2]);
      index2++;
    }
  }

  while (index1 < array1.length) {
    combined.push(array1[index1]);
    index1++;
  }

  while (index2 < array2.length) {
    combined.push(array2[index2]);
    index2++;
  }

  return combined;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = (array.length / 2) | 0; // math.floor()
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
console.log(mergeSort([21, 2, 2, 33, 33, 14, 5, 69, 17, 28, 39, 10]));
