const spawn = require('child_process').spawn;  // spawn은 '알(egg)'의 뜻

// var process = spawn('python', ['test.py']);  // 터미널창에서 node spawn으로 실행
var process = spawn('python', ['ch3/3.5/test.py']);

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
