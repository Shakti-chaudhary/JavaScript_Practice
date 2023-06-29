// ================== Insertion sort ====================

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    let j = i;
    while (j > 0 && currentValue < array[j - 1]) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = currentValue;
  }
  return array;
}
console.log(insertionSort([21, 2, 2, 33, 33, 14, 5, 69, 17, 28, 39, 10]));
// [ 2, 2, 5, 10, 14, 17, 21, 28, 33, 33, 39, 69 ]
