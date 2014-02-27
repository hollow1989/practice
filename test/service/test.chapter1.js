'use strict';
var chapter1 = require('../../service/chapter1');
var expect = require('expect.js');

describe('chapter 1', function() {

  it('should be success', function(done) {
    var n = 1;
    var a = 1;
    chapter1.chapter1_6(n, a, function(err, result) {
      console.log(result);
      done();
    });
  });

});
