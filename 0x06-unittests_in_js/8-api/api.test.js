#!/usr/bin/node
const request = require('request');
const app = require('./api');
const { expect } = require('chai');

describe('GET /', () => {
  it('should return 200', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return Welcome to the payment system', (done) => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
