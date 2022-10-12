// (방법5) prototypal한 방식의 재사용
// Object.create()를 사용해 객체를 생성과 동시에 프로토타입객체를 지정
// 간결해서 선호되는 방법

var person={
  type:"인간",
  getType:function(){
    return this.type;
  },
  getName:function(){
    return this.name;
  }
};

var joon=Object.create(person);
joon.name="창완";

console.log(joon.getType()); //"인간"
console.log(joon.getName()); //"창완"

