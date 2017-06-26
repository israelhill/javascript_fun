// MERGESORT IN JAVASCRIPT!

function mergesort(arr, left, right) {
  // BASE CASE
  if(left < right) {
    var middle = Math.floor(left + ((right - left)/2));
    mergesort(arr, left, middle);
    mergesort(arr, middle+1, right);
    merge(arr, left, middle, right);
  }
}

function merge(arr, left, middle, right) {
  var leftSide = [];
  var rightSide = [];
  var i = 0;
  var j = 0;
  var k = 0;
  // size of left and right subarrays respectively
  var n1 = middle - left + 1;
  var n2 = right - middle;

  // fill the left and right subarrays
  while(i < n1) {
    leftSide[i] = arr[left + i];
    i++;
  }
  i = 0;
  while(j < n2) {
    rightSide[j] = arr[middle+1 + j];
    j++;
  }
  j = 0;

  // find the smaller value from the 2 subarrays and enter into arr
  while(i < n1 && j < n2) {
    if(leftSide[i] <= rightSide[j]) {
      arr[left + k] = leftSide[i];
      i++;
    }
    else {
      arr[left + k] = rightSide[j];
      j++;
    }
    k++;
  }

  // empty the rest of the contents of the larger subarray into arr
  while(i < n1) {
    arr[left + k] = leftSide[i];
    i++;
    k++;
  }
  while(j < n2) {
    arr[left + k] = rightSide[j];
    j++;
    k++;
  }
}


var a = [9, 8, 7, 6, 5, 23, 19, 0];
mergesort(a, 0, a.length-1);
console.log(a);
