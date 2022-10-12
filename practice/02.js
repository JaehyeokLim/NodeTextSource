// 배열 이해하기.

// 배열은 여러 개의 데이터를 하나의 변수에 담아둘 수 있는 방법.
// 배열의 요소는 대괄호를 이용해 접근할 수 있음.

var User = [{name:'소녀시대', age:20}, {name:'걸스데이', age:22}];
User.push({name:'티아라', age:23});
console.log('사용자 수: %d', User.length);
console.log('첫 번째 사용자 이름: %s', User[0].name)
console.log('배열 정보: %s', User)

// 변수의 자료형과 상관없이 배열에 추가 가능
var add = function(a, b) {
    return a + b;
};

User.push(add)
console.log("배열 내 함수 실행: %d", User[3](10, 10));
console.log("배열 내 함수 실행: %d", User.add);

// 배열의 원소를 하나씩 확인하기.
for (var i = 0; i < User.length; i++) {
    console.log("배열 요소 " + (i+1) + "번째: %s", User[i].name);
}

// forEach 구문 사용하기.
console.log("₩nforEach 구문 사용하기");
User.forEach(function(item, index) {
    console.log("배열 요소 #" + index + " : %s", item.name)
});

// 배열에 값 추가 및 삭제하기.
// push, pop 배열의 끝에 추가, 삭제
// unshift, shift 배열의 앞에 추가, 삭제
// splice(index, removeCount [,object]) 여러개의 객체를 요소로 추가하거나 삭제.
// splice(index, copyCount) 여러개의 요소를 잘라내어 새로운 배열 객체로 만듦.

// 콜백 함수
// 동기식 / 비동기식 입출력 방식.
// 동기식: 서버에 요청을 보낸 후 응답을 받아야만 다음 동작이 이루어지는 방식.
// 비동기식: 요청을 보낸후 응답과는 상관없이 다음 동작이 이루어지는 방식.
