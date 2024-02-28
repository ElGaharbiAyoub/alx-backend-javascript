#!/usr/bin/node

class AppController {
  static getHomepage(req, res) {
    res.send('Hello Holberton School!', 200);
  }
}

module.exports = AppController;
