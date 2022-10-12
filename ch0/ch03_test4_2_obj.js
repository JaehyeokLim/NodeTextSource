/**
 * 3장 Test 4
 * 
 * 함수도 객체이다
 * 
 */

// 함수 정의
function add(x,y) {
    return x + y;
}

// 함수에 프로퍼티 추가
add.result = add(3,4);
add.status = 'OK';

console.log(add.result); // 7
console.log(add.status); // 'OK'

