#!/usr/bin/node
const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the correct message', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res)
        .to.have.property('data')
        .to.equal('Successful response from the API');
      done();
    });
  });
});
