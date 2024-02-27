#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
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
        console.log(`Number of students: ${studentsCount}`);
        for (const field in studentsByField) {
          if (field) {
            const list = studentsByField[field];
            console.log(
              `Number of students in ${field}: ${
                list.length
              }. List: ${list.join(', ')}`,
            );
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
