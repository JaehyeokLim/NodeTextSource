const fs = require('fs').promises;

// fs.readFile('./readme.txt')
fs.readFile('./ch3/3.6/readme.txt')
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
