function Person(name){
  this.name=name||"창완";
}

Person.prototype.getName=function(){
  return this.name;
}

function Korean(name){}
Korean.prototype=new Person();

var kor1=new Korean();
console.log(kor1.getName()); //"창완"

var kor2=new Korean("순천향");
console.log(kor2.getName()); //"창완"  --> 부모 생성자에 인자를 넘겨주지 않음
var kor2=new Person("순천향"); // (방법1) 객체를 생성할 때 부모의 함수를 호출하여 해결할 수 있다.
console.log(kor2.getName()); //"순천향"