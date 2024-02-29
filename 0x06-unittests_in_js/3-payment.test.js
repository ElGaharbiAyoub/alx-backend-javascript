#!/usr/bin/nod
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  it('should return 120 if the calculateNumber is called', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledOnce);
    calculateNumberStub.restore();
  });
  it('should return 20 if the calculateNumber is called', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('SUBTRACT', 100, 80).returns(20);
    sendPaymentRequestToApi(100, 80);
    assert(calculateNumberStub.calledOnce);
    calculateNumberStub.restore();
  });
  it('should return Error if the calculateNumber is called', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.withArgs('DIVIDE', 100, 0).returns('Error');
    sendPaymentRequestToApi(100, 0);
    assert(calculateNumberStub.calledOnce);
    calculateNumberStub.restore();
  });
});
