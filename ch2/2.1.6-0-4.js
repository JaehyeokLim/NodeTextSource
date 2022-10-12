// (방법4) 부모생성자를 한 번도 호출하지 않으면서
// 프르토타입 객체를 공유하는 방법

function Person(name){
  this.name=name||"창완";
}

Person.prototype.getName=function(){
  return this.name;
}

function Korean(name){
  this.name=name;
}
Korean.prototype=Person.prototype;

var kor1=new Korean("창완");
console.log(kor1.name); //"창완"
