function quickSort(list, leftPointer, rightPointer) {
  let pivot = null;
  // 当 l 与 r 重合后，则不继续进行排序
  if (leftPointer < rightPointer) {
    // 选取基准值，并找到它的位置
    pivot = partition(list, leftPointer, rightPointer);
    console.log('pivot', pivot);
    // 递归左右子集
    quickSort(list, leftPointer, pivot - 1);
    quickSort(list, pivot + 1, rightPointer);
  }
}

function partition(list, leftPointer, rightPointer) {
  let pivotKey = list[leftPointer];
  console.log('list', list, pivotKey);
  while (leftPointer < rightPointer) {
    console.log('pointer', leftPointer, rightPointer);
    while (leftPointer < rightPointer && list[rightPointer] >= pivotKey ) {
      rightPointer--;
    } 
    swap(list, leftPointer, rightPointer, 'right');

    while (leftPointer < rightPointer && list[leftPointer] <= pivotKey) {
      leftPointer++;
    }
    swap(list, leftPointer, rightPointer, 'left');
  }
  return leftPointer;
}

function swap(list, leftPointer, rightPointer, tag) {
  console.log('swap-pointer', leftPointer, rightPointer);
  let tmp = list[leftPointer];
  list[leftPointer] = list[rightPointer];
  list[rightPointer] = tmp;
  console.log('swap', list, tag);
}

const arr = [50,10,90,30,70,40,80,60,20];
// const arr = [2,3,7,9,5];
quickSort(arr, 0, arr.length-1);