'use strict';
var expect = require('expect.js');
var practice = require('../../');

describe('#sort', function() {

  describe.skip('#quick sort', function() {
    it('should sort', function(done) {

      var array = [1, 4, 4, 1, 8];
      array = practice.sort.quickSort(array);
      console.log(array);
      done();
    });
  });

  describe('#integer sort', function() {
    it('should sort', function(done) {
      var array = [1, 4, 4, 1, 8];
      array = practice.sort.integerSort(array);
      expect(array).to.be.eql([1, 1, 4, 4, 8]);
      done();
    });
  });
  it('should sort', function(done) {
    var array = [4, 8, 1, 2, 4, 12, -1];
    array = practice.sort.integerSort(array);
    expect(array).to.be.eql([-1, 1, 2, 4, 4, 8, 12]);
    done();
  });

});
