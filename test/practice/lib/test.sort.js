'use strict';
var expect = require('expect.js');
var practice = require('../../');

describe('#sort', function() {

  describe('#quick sort', function() {
    it('should be success', function(done) {

      var array = [1,4,4,1,8];
      array = practice.quickSort(array);
      console.log(array);
      done();
    });
  });

});
