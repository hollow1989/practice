'use strict';
var expect = require('expect.js');
var practice = require('../../');

describe('#func', function() {

  describe('#get', function() {
    it('should get element', function(done) {

      var array = [1, 2, 3, 4];
      var n = practice.func.get(array);
      expect(1 <= n && n <= 4).to.be.ok();
      done();
    });
    it('should get element', function(done) {

      var obj = {
        '1': 'test',
        '2': 'hoge',
        'hoge': 'foo',
        'foo': 'mu'
      };
      var o = practice.func.get(obj);
      expect(o === 'test' || o === 'hoge' || o === 'foo' || o === 'mu').to.be.ok();
      done();
    });
  });
});
