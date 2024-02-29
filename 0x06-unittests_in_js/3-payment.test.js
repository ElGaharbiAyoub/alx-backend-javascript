#!/usr/bin/nod
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const { expect } = require('chai');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  it('should call the Utils function', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledOnce).to.be.true;
    calculateNumberSpy.restore();
  });
  it('should call Utils with the right arguments', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
