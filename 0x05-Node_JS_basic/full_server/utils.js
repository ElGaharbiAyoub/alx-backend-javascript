#!/usr/bin/node
const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.split('\n');
        const students = lines
          .filter((line) => line)
          .map((line) => line.split(','));
        const studentsByField = students.slice(1).reduce((acc, student) => {
          const field = student[3];
          if (!acc[field]) acc[field] = [];
          acc[field].push(student[0]);
          return acc;
        }, {});
        resolve(studentsByField);
      }
    });
  });
}

module.exports = readDatabase;
