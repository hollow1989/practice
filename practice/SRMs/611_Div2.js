'use strict';

// 直す！！
//http://topcoder.g.hatena.ne.jp/agw/20140310
exports['500'] = function(array, result) {

  array.reverse();
  var l = array.length;

  for (var i = 0; i < l; i++) {
    var large = array.shift();
    if (result % large !== 0) {
      continue;
    }
    if (check(large, array)) {
      return 'Possible';
    }
  }
  return 'Impossible';

  function check(large, array) {
    for (var i = array.length - 1; i--;) {
      var small = array[i];
      var lcm = lcm(large, small);
      if (lcm === result) {
        return true;
      } else if (lcm < result) {
        check();
      }
    }
  }

  function lcm(large, small) {
    return large * small / gcd(large, small);
  }

  function gcd(large, small) {
    if (large === small) {
      return large;
    }
    if (diff > small) {
      return gcd(diff, small);
    }
    return gcd(small, diff);
  }
};

