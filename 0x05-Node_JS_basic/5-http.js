const http = require('http');
const fs = require('fs');

const port = 1245;
const hostname = '127.0.0.1';
const path = process.argv[2];

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
              }. List: ${list.join(', ')}`
            );
          }
        }
        resolve();
      }
    });
  });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(path)
      .then((response) => {
        const outString = response.slice(0, -1);
        res.end(outString);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
