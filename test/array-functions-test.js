var { assert, expect } = require('chai');
var ArrayFunctions = require('../src/array-functions.js');

describe('ArrayFunctions', function() {
  beforeEach(function() {
    arrayFunctions = new ArrayFunctions();
  });

  describe('printSpecial()', function() {
    it('should return each element with " --- " in between', function() {
      var numbers = [12, 33, 144, 122];
      expect(arrayFunctions.printSpecial(numbers)).to.equal("12 --- 33 --- 144 --- 122");
    });
  });

  describe('doubleArray()', function(){
    it('should double the value of all numbers in an array', function(){
      var numbers = [10, 20, 35, 12];
      expect(arrayFunctions.doubleArray(numbers)).to.deep.equal([20, 40, 70, 24])
    });
  });

  describe('superPower()', function(){
    it('should return each element to the power of it\'s index', function(){
      var numbers = [10, 20, 35, 12];
      expect(arrayFunctions.doubleArray(numbers)).to.deep.equal([20, 40, 70, 24])
    });
  });
});
