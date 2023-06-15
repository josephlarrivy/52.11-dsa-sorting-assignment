function bubbleSort(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    // console.log(swapped)
    for (let j = 0; j < arr.length - i; j++) {
      count++;
      // console.log(count)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // console.log(arr[i], arr[j])
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

module.exports = bubbleSort;