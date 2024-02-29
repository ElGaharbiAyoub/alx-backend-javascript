const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');
const assert = require('assert');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with the correct arguments', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberSpy.calledWith('SUM', 100, 20));
    calculateNumberSpy.restore();
  });
});
