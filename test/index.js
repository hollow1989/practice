'use strict';

var _ = require('lodash');
var practice = require('../practice');

_.each(practice, function(func, key) {
  exports[key] = func;
});
