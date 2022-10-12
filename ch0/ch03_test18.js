/**
 * 3장 Test 18
 *
 * 프로토타입 객체 만들기
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person00 = new Person("소년시대", 30);
console.log(" person00.name : " + person00.name);
console.log(" person00.age : " + person00.age);


Person.prototype.walk = function (speed) {
// Person.walk = function (speed) {
  console.log(speed + "km 속도로 걸어갑니다.");
};

var person01 = new Person("소녀시대", 20);
var person02 = new Person("걸스데이", 22);

console.log(person01.name + " 객체의 walk(10)을 호출합니다.");
person01.walk(10);
console.log(person00.name + " 객체의 walk(20)을 호출합니다.");
person00.walk(20);
