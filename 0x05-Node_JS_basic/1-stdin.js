#!/usr/bin/node
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  rl.once('line', (input) => {
    console.log(`Your name is: ${input}`);
    process.exit();
  });
} else {
  rl.once('line', (input) => {
    console.log(`Your name is: ${input}`);
    process.exit();
  });

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
