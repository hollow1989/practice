'use strict';

exports.quickSort = function(array) {

  return sort(array, 0, array.length - 1);

  function sort(array, i, j) {
    if (i === j) {
      return array;
    }
    var p = pivot(array, i, j);
    if (!isNaN(p)) {
      var k = partition(array, i, j, array[p]);
      sort(array, i, k - 1);
      sort(array, k, j);
    }
    return array;
  }
};

function pivot(array, i, j) {
 var k = i + 1;
 while (k <= j && array[i] === array[k]) {
  k++;
 }
 if (j < k) {
  return false;
 }
 if (array[k] <= array[i]) {
  return i;
 }
 return k;
}

function partition(array, i, j, key) {
  var a = i;
  var b = j;
  while (a < b) {
    while (a <= j && array[a] < key) {
      a++;
    }
    while (i <= b && key <= array[b]) {
      b--;
    }
    if (b <= a) {
      break;
    }
    var c = array[a];
    array[a] = array[b];
    array[b] = c;
    a++;
    b--;
  }
  return array;
}


exports.integerSort = function(array) {

  var dummy = {
    minus: [],
    plus: []
  };
  array.forEach(function(n) {
    if (n < 0) {
      dummy.minus[-n] = ++dummy.minus[-n] || 1;
    } else {
      dummy.plus[n] = ++dummy.plus[n] || 1;
    }
  });
  var result = [];
  dummy.minus.forEach(function(n, i) {
    while(0 < n--) {
      result.push(-i);
    }
  });
  result.reverse();
  dummy.plus.forEach(function(n, i) {
    while(0 < n--) {
      result.push(i);
    }
  });

  return result;
};
