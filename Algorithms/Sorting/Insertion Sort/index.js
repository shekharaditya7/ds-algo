/*
@param {array} arr - The array to be sorted
*/

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const curr = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > curr) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = curr;
  }
  return arr;
}

console.log(insertionSort([3, 6, 1, 2, 3]));
