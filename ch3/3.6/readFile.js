const fs = require('fs');

// fs.readFile('./readme.txt', (err, data) => {
fs.readFile('./ch3/3.6/readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
