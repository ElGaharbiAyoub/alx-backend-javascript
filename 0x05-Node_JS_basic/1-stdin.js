#!/usr/bin/node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

rl.once('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
