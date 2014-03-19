'use strict';
var expect = require('expect.js');
var practice = require('../../');

var data = [{
    param: [
      [2, 3, 4, 5],
      20
    ],
    expect: 'Possible'
  }, {
    param: [
      [2, 3, 4],
      611
    ],
    expect: 'Impossible'
  }, {
    param: [
      [2, 3, 4],
      12
    ],
    expect: 'Possible'
  }, {
    param: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      24
    ],
    expect: 'Possible'
  }, {
    param: [
      [100, 200, 300, 400, 500, 600],
      2000
    ],
    expect: 'Possible'
  }, {
    param: [
      [100, 200, 300, 400, 500, 600],
      8000
    ],
    expect: 'Impossible'
  }
];

describe('#SRMs', function() {

  describe('#611_Div2', function() {
    it('should be success data[0]', function(done) {
      var result = practice['611_Div2']['500'](data[0].param[0], data[0].param[1]);
      expect(result).to.be(data[0].expect);
      done();
    });

    it('should be success data[1]', function(done) {
      var result = practice['611_Div2']['500'](data[1].param[0], data[1].param[1]);
      expect(result).to.be(data[1].expect);
      done();
    });

    it('should be success data[2]', function(done) {
      var result = practice['611_Div2']['500'](data[2].param[0], data[2].param[1]);
      expect(result).to.be(data[2].expect);
      done();
    });

    it('should be success data[3]', function(done) {
      var result = practice['611_Div2']['500'](data[3].param[0], data[3].param[1]);
      expect(result).to.be(data[3].expect);
      done();
    });

    it('should be success data[4]', function(done) {
      var result = practice['611_Div2']['500'](data[4].param[0], data[4].param[1]);
      expect(result).to.be(data[4].expect);
      done();
    });

    it('should be success data[5]', function(done) {
      var result = practice['611_Div2']['500'](data[5].param[0], data[5].param[1]);
      expect(result).to.be(data[5].expect);
      done();
    });

  });

});
