/**
 * 3장 Test 15
 *
 * 함수를 파라미터로 전달
 */

function add(a, b, callback) {
  var result = a + b;
  callback(result);
}

add(10, 10, function (result) {
  console.log("파라미터로 전달된 콜백 함수 호출됨.");
  console.log("더하기 (10, 10)의 결과 : %d", result);
});


// callback = function (result) {
//   console.log("파라미터로 전달된 콜백 함수 호출됨.");
//   console.log("더하기 (10, 10)의 결과 : %d", result);
// }
// var a = function(){};
// a()

// var c = function (result) {
//   console.log("파라미터로 전달된 콜백 함수 호출됨.");
//   console.log("더하기 (10, 10)의 결과 : %d", result);
// };

// add(10, 10, c);
