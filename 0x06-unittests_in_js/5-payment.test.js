const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    consoleSpy.restore();
  });

  it('should return 120 if the sendPaymentRequestToApi is called with 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert(consoleSpy.calledOnceWith('The total is: 120'));
  });

  it('should return 20 if the sendPaymentRequestToApi is called with 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    assert(consoleSpy.calledOnceWith('The total is: 20'));
  });
});
