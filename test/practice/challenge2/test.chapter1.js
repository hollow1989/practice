'use strict';
var expect = require('expect.js');
var practice = require('../../');

describe('#chapter1', function() {

  describe('#chapter1_6', function() {
    it('should be success', function(done) {

      var n = 5;
      var a = [2, 3, 4, 5, 10];
      var result = practice.challenge2.chapter1_6(n, a);
      expect(result).to.be(12);
      done();
    });
    it('should be success', function(done) {

      var n = 5;
      var a = [2, 3, 4, 5, 6, 7, 200, 300, 400, 1000];
      var result = practice.challenge2.chapter1_6(n, a);
      expect(result).to.be(900);
      done();
    });
  });

});
