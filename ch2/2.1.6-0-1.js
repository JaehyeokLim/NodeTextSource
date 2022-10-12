// (방법2) 부모 생성자에 인자를 넘겨주지 못하는 단점을 극복하기 위해
// apply 함수를 사용해 부모객체인 Person 함수 영역의 this를
// Korean 함수 안의 this로 바인딩한다. 부모 객체의 this로 된 멤버들만 상속받고, 
// 부모객체의 프로토타입 개체의 멤버들을 물려받지 못하는 단점이 있음.

function Person(name){
  this.name=name||"창완";
}

Person.prototype.getName=function(){
  return this.name;
}

function Korean(name){
  Person.apply(this, arguments);
}

var kor1=new Korean("창완");
console.log(kor1.name); //"창완"
