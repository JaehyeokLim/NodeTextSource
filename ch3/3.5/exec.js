const exec = require('child_process').exec;

var process = exec('dir');

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러

// 만일 한글이 깨져 나오면,
// cmd /c chcp 65001>nul && dir
// 명령어를 쳐서 유니코드를 콘솔에 표시하도록 한다.
// 콘솔창에서 node exec로 실행
