function quickSort(list, leftPointer, rightPointer) {
  let pivot = null;
  // 当 l 与 r 重合后，则不继续进行排序
  if (leftPointer < rightPointer) {
    // 选取基准值，并找到它的位置
    pivot = partition(list, leftPointer, rightPointer);
    console.log('pivot', pivot, `次`);
    // 递归左右子集
    quickSort(list, leftPointer, pivot - 1);
    quickSort(list, pivot + 1, rightPointer);
  }
}

function partition(list, leftPointer, rightPointer) {
  // 交换左右，保证左边最小
  if (list[leftPointer] > list[rightPointer]) {
    swap(list, leftPointer, rightPointer, '左右');
  }

  // 计算中间元素的下标
  let m = leftPointer + (rightPointer - leftPointer);
  // 交换中右，保证中间最小
  if (list[m] > list[rightPointer]) {
    swap(list, rightPointer, m, '中右');
  }

  // 交换中左，保证左边最小
  if (list[m] > list[leftPointer]) {
    swap(list, m, leftPointer, '中左');
  }

  let pivotKey = list[leftPointer];
  console.log('list', list, pivotKey);
  key = pivotKey;
  while (leftPointer < rightPointer) {
    console.log('pointer', leftPointer, rightPointer, key);
    while (leftPointer < rightPointer && list[rightPointer] >= pivotKey ) {
      rightPointer--;
    } 
    // swap(list, leftPointer, rightPointer, 'right');
    list[leftPointer] = list[rightPointer];

    while (leftPointer < rightPointer && list[leftPointer] <= pivotKey) {
      leftPointer++;
    }
    // swap(list, leftPointer, rightPointer, 'left');
    list[rightPointer] = list[leftPointer];
  }
  list[leftPointer] = key;
  return leftPointer;
}

function swap(list, leftPointer, rightPointer, tag) {
  console.log('swap-pointer', leftPointer, rightPointer);
  let tmp = list[leftPointer];
  list[leftPointer] = list[rightPointer];
  list[rightPointer] = tmp;
  console.log('swap', list, tag);
}

// const arr = [50,10,90,30,70,40,80,60,20];
// const arr = [2,3,7,9,5];
const arr = [9,1,5,8,3,7,4,6,2];
let key = null;
quickSort(arr, 0, arr.length-1);