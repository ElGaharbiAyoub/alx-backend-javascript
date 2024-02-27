#!/usr/bin/node

const http = require('http');

const port = 1245;
const hostname = 'localhost';

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {});
module.exports = app;
