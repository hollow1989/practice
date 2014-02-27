'use strict';

var _ = require('lodash');

var folderPass = [
  'challenge2'
];

_.each(folderPass, function(folder) {
  _.each(require('./' + folder), function(files) {
    _.each(files, function(func, key) {
      exports[key] = func;
    });
  });
});
