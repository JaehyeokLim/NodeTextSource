/**
 * 3장 Test 14
 *
 * 배열 일부를 잘라내어 새로운 객체로 만들기
 * slice() 메소드 사용
 */

var Users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
  { name: "티아라", age: 23 },
  { name: "애프터스쿨", age: 25 },
];

console.log("배열 요소의 수 : %d", Users.length);
console.log("원본 Users");
console.dir(Users);

var Users2 = Users.slice(1, 3);

console.log("slice()로 잘라낸 후 Users2");
console.log("Users2");
console.dir(Users2);
console.log("원본 Users");
console.dir(Users);

var Users3 = Users2.slice(1);

console.log("slice()로 잘라낸 후 Users3");
console.log("Users3");
console.dir(Users3);
