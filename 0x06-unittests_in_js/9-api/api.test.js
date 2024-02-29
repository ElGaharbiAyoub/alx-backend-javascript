#!/usr/bin/node
const request = require('request');
const { expect } = require('chai');

describe('GET /', () => {
  const ops = {
    url: 'http://localhost:7865',
    method: 'GET',
  };
  it('should return 200', (done) => {
    request(ops, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Welcome to the payment system', (done) => {
    request(ops, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('GET /cart/12', () => {
  const ops = {
    url: 'http://localhost:7865/cart/12',
    method: 'GET',
  };
  it('should return 200', (done) => {
    request(ops, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Payment methods for cart 12', (done) => {
    request(ops, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });
});

describe('GET /cart/hello', () => {
  const ops = {
    url: 'http://localhost:7865/cart/hello',
    method: 'GET',
  };
  it('should return 404', (done) => {
    request(ops, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
