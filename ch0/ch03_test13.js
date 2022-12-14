/**
 * 3장 Test 13
 *
 * 배열의 요소 삭제하기, 요소들을 추가하거나 삭제하기
 * delete 키워드 사용, splice() 메소드 사용
 */

var Users = [
  { name: "소녀시대", age: 20 },
  { name: "걸스데이", age: 22 },
  { name: "티아라", age: 23 },
];

console.log(
  "delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d",
  Users.length
);
console.dir(Users);

delete Users[1];

console.log("delete 키워드로 배열 요소 삭제 후");
console.log(
  "delete 키워드로 배열 요소 삭제 후 배열 요소의 수 : %d",
  Users.length
);
console.dir(Users);

Users.splice(1, 0, { name: "애프터스쿨", age: 25 });

console.log("splice()로 요소를 인덱스 1에 추가한 후 배열 요소의 수 : %d", Users.length);
console.log("splice()로 요소를 인덱스 1에 추가한 후");
console.dir(Users);

Users.splice(1, 2);

console.log("splice()로 요소를 삭제한 후 배열 요소의 수 : %d", Users.length);
console.log("splice()로 인덱스 2의 요소를 삭제한 후");
console.dir(Users);
