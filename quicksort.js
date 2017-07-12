// This version has a worst case runtime of n^2 when the array is already
// sorted or when the array contains identical elements.

function quicksort(a, low, hi) {
  if(low < hi) {
    var p = partition(a, low, hi);
    quicksort(a, low, p-1);
    quicksort(a, p+1, hi);
  }
}

function partition(a, low, hi) {
  var pivot = a[hi];
  var i = low-1;
  var j = low;
  while(j < hi) {
    if(a[j] <= pivot) {
      i++;
      swap(a, i, j);
    }
    j++;
  }
  swap(a, i+1, hi);
  return i+1;
}

function swap(a, index1, index2) {
  var temp = a[index1];
  a[index1] = a[index2];
  a[index2] = temp;
}


var a = [10, 6, 3, 8, 1, 2, 4, 9, 5, 7];
quicksort(a, 0, a.length-1);
console.log(a);
