/**
 * 3장 Test 10
 * 
 * 배열 안의 모든 요소를 하나씩 확인하기
 */

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23}];

console.log('배열 요소의 수 : %d', Users.length);
for (var i = 0; i < Users.length; i++) {
	console.log('배열 요소 #' + i + ' : %s', Users[i].name);
} 

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index, a) {
// Users.forEach(function(index, item, a) {
	console.log('배열 요소1 #' + index + ' : %s', item.name);
	// console.log('배열 요소 #' + index + ' : %s', item.name);
});

Users.forEach(function(a, b, c) {
	console.log('배열 요소2 #' + b + ' : %j', a);
	console.log('c:  ');
	console.dir(c);
});

