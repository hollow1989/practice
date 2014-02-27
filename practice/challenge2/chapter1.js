'use strict';

var _ = require('lodash');

exports.chapter1_6 = function(n, a, callback) {

  if (!_.isArray(a) || a.length < 3) {
    return callback('・ｘ・');
  }

  a = _.sortBy(a, function(n) {
    return -n;
  });
  callback(null, a);
};
