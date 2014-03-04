'use strict';

var sort = require('../lib/sort');

exports.chapter1_6 = function(num, array) {

  // TODO quick sort
  array = sort.integerSort(array);
  array.reverse();

  while(0 < array.length) {
    var n = array.shift();
    var n1 = array[0];
    var n2 = array[1];
    if (n <= n1 + n2) {
      return n + n1 + n2;
    }
  }
  return false;
};
