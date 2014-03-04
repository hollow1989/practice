'use strict';

var _ = require('lodash');
var floor = Math.floor;
var random = Math.random;

exports.get = function(element) {
  var self = this;

  if (_.isArray(element)) {
    return element[floor(random() * element.length)];
  }
  if (_.isObject(element)) {
    return element[self.get(_.keys(element))];
  }
};
