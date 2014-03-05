'use strict';

var _ = require('lodash');
var chapter = [
  'chapter1',
  'chapter2'
];

exports.challenge2 = {
  challenge2: _.reduce(chapter, function(m, c) {
    var e = require('./' + c);
    return _.reduce(e, function(m, f, c) {
      m[c] = f;
      return m;
    }, m);
  }, {})
};
