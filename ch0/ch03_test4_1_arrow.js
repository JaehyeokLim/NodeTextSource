/**
 * 3장 Test 4
 * 
 * 화살표 함수
 * 
 */

// concise body
var power = x => x ** 2;
console.log(power(2)); // -> 4
// 위 표현은 다음과 동일하다.
// block body
var power = x => { return x ** 2; };
console.log(power(2)); // -> 4

var power = function(x) { return x ** 2; };
console.log(power(2)); // -> 4

