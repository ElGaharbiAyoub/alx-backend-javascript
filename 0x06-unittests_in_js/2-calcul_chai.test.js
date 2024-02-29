#!/usr/bin/node
const { expect } = require('chai');
const calculateNumber = require('./2-calcul.js');

describe('calculateNumber', function () {
  it('should return 4 when adding 1 and 3', function () {
    expect(calculateNumber('SUM', 1, 3)).to.equal(4);
  });
  it('should return 5 when adding 1 and 3.7', function () {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('should return 5 when adding 1.2 and 3.7', function () {
    expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
  });
  it('should return 6 when adding 1.5 and 3.7', function () {
    expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('should return 0 when adding 1.1 and 3.3', function () {
    expect(calculateNumber('SUM', 1.1, 3.3)).to.equal(4);
  });
  it('should return -2 when adding -1 and -1', function () {
    expect(calculateNumber('SUM', -1, -1)).to.equal(-2);
  });
  it('should return 2 when subtracting 1 from 3', function () {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
  });
  it('should return 1 when subtracting 1.5 from 3.7', function () {
    expect(calculateNumber('SUBTRACT', 3.7, 1.5)).to.equal(2);
  });
  it('should return -3 when subtracting 1.5 from 1', function () {
    expect(calculateNumber('SUBTRACT', 1, 1.5)).to.equal(-1);
  });
  it('should return -2 when subtracting -1 from -1', function () {
    expect(calculateNumber('SUBTRACT', -1, -1)).to.equal(0);
  });
  it('should return 0.2 when dividing 1 by 5', function () {
    expect(calculateNumber('DIVIDE', 1, 5)).to.equal(0.2);
  });
  it('should return 0.2 when dividing 1.5 by 3.7', function () {
    expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
  });
  it('should return "Error" when dividing by 0', function () {
    expect(calculateNumber('DIVIDE', 1.5, 0)).to.equal('Error');
  });
});
