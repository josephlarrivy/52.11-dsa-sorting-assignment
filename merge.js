function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
    // console.log(arr1[i], arr2[j])
  }
  while (i < arr1.length) {
    // console.log('pushing leftovers into results')
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    // console.log('pushing leftovers into results')
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    console.log('returning arr')
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  // console.log(left, right)
  return merge(left, right);
}


module.exports = { merge, mergeSort};