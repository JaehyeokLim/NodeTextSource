/**
 * 3장 Test 2
 *
 * 자바스크립트의 객체 타입
 * 객체는 중괄호를 이용해 만들어지며 그 안에 속성을 추가할 수 있음
 */

var Person = {};

Person["age"] = 50;
Person["name"] = "홍길동";
Person.mobile = "010-0000-0000";

console.log("나이 : %d", Person.age);
console.log("이름 : %s", Person.name);
console.log("전화 : %s", Person["mobile"]);
console.dir(Person);
