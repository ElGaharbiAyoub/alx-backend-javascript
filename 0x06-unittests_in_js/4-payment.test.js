const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js');

describe('sendPaymentRequestToApi', function () {
  it('should call Utils.calculateNumber with the correct arguments', function () {
    const calculateNumberSpy = sinon.spy(console, 'log');
    const subt = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(subt, 'SUM', 100, 20);
    sinon.assert.calledWith(calculateNumberSpy, 'The total is: 10');
  });
});
