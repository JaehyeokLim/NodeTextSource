// (방법3) 생성자 빌려쓰고(13라인), 프로토타입지정해주기(15라인). 
// 부모 생성자를 두번 호출하는 단점이 있음.

function Person(name){
  this.name=name||"창완";
}

Person.prototype.getName=function(){
  return this.name;
}

function Korean(name){
  Person.apply(this, arguments);
}
Korean.prototype=new Person();

var kor1=new Korean("창완");
console.log(kor1.name); //"창완"
