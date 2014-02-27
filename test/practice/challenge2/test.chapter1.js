'use strict';
var expect = require('expect.js');
var practice = require('../../');
describe('chapter1', function() {

  it('should be success', function(done) {

    var n = 1;
    var a = 1;
    practice.chapter1_6(n, a, function(err, result) {
      if (err) {
        return done(err);
      }
      done();
    });
  });

});
