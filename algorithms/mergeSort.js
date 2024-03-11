const merge = (leftArr, rightArr) => {
  let i = 0,
    j = 0;

  const arr = [];
  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] < rightArr[j]) {
      arr.push(leftArr[i++]);
    } else {
      arr.push(rightArr[j++]);
    }
  }

  while (i < leftArr.length) {
    arr.push(leftArr[i++]);
  }

  while (j < rightArr.length) {
    arr.push(rightArr[j++]);
  }

  return arr;
};

const mergeSort = arr => {
  if (!arr || arr.length <= 1) {
    return arr;
  }

  let mid = Math.ceil(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  let unsortedLeftArr = mergeSort(leftArr);
  let unsortedRightArr = mergeSort(rightArr);
  return merge(unsortedLeftArr, unsortedRightArr);
};

const res = mergeSort([5, 2, 11, 6, 10, 9]);
console.log(res);
