#!/usr/bin/node
const express = require('express');
const fs = require('fs');

const port = 1245;
const path = process.argv[2];
const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        let output = '';
        const lines = data.split('\n');
        const students = lines
          .filter((line) => line)
          .map((line) => line.split(','));
        const studentsCount = students.length - 1;
        const studentsByField = students.slice(1).reduce((acc, student) => {
          const field = student[3];
          if (!acc[field]) acc[field] = [];
          acc[field].push(student[0]);
          return acc;
        }, {});
        output += `Number of students: ${studentsCount}\n`;
        for (const field in studentsByField) {
          if (field) {
            const list = studentsByField[field];
            output += `Number of students in ${field}: ${
              list.length
            }. List: ${list.join(', ')}\n`;
          }
        }
        resolve(output);
      }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(path.toString())
    .then((response) => {
      res.send(`This is the list of our students\n ${response.slice(0, -1)}`);
    })
    .catch((err) => {
      console.log(err);
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = app;
