'use strict';

var _ = require('lodash');

var folderPass = [
  'lib',
  'challenge2',
  'SRMs'
];

_.each(folderPass, function(folder) {
  _.each(require('./' + folder), function(files) {
    _.each(files, function(func, key) {
      exports[key] = func;
    });
  });
});
