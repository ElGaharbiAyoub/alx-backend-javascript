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

describe('GET /available_payments', () => {
  const ops = {
    url: 'http://localhost:7865/available_payments',
    method: 'GET',
  };
  it('should return 200', (done) => {
    request(ops, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('should return {"payment_methods":{"credit_cards":true,"paypal":false}}', (done) => {
    request(ops, (err, res, body) => {
      expect(body).to.equal(
        '{"payment_methods":{"credit_cards":true,"paypal":false}}'
      );
      done();
    });
  });
});

describe('POST /login', () => {
  const ops = {
    url: 'http://localhost:7865/login',
    json: true,
    headers: { 'Content-Type': 'application/json' },
    body: { userName: 'Ayoub' },
  };
  it('should return 200', (done) => {
    request.post(ops, (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(res.statusCode).to.equal(200);
        done();
      }
    });
  });
  it('should return Welcome Ayoub', (done) => {
    request.post(ops, (err, res, body) => {
      if (err) {
        done(err);
      } else {
        expect(body).to.equal('Welcome Ayoub');
        done();
      }
    });
  });

  it('should return 404', (done) => {
    request.post(
      {
        url: 'http://localhost:7865/login',
        json: true,
        body: {},
      },
      (err, res, body) => {
        if (err) {
          done(err);
        } else {
          expect(res.statusCode).to.equal(404);
          done();
        }
      }
    );
  });
});
