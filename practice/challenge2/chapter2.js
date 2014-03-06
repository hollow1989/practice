'use strict';

var _ = require('lodash');

exports.lake = function(N, M, LAKE) {
  var lake = _.clone(LAKE);
  var num = 0;
  for (var n = 0; n < N; n++) {
    for (var m = 0; m < M; m++) {
      if (check(n, m, lake)) {
        num++;
        lake = search(n, m, bury(n, m, lake));
      }
    }
  }
  return num;

  function check(n, m, lake) {
    return lake[n][m] === 'W';
  }

  function bury(n, m, lake) {
    lake[n][m] = '.';
    return lake;
  }

  function search(n, m, lake) {
    for (var i = 0; i < 4; i++) {
      n = i === 1 ? ++n : n;
      m = i === 1 ? m - 2 : ++m;
      if (N <= n) {
        return lake;
      }
      if (check(n, m, lake)) {
        lake = search(n, m, bury(n, m, lake));
      }
    }
    return lake;
  }
};
