var age = 20;
console.log('나이 : %d', age);
var name = '소녀시대';
console.log('이름 : %s', name);

// 변수만 hoisting가능, let이나 const로 하면 에러 발생.
function getX() {
    console.log(x);
    var x = 100;

    console.log(x)
};

getX()

// 객체는 {}기호를 이용해 만듬. 객체 안의 속성은 . 연산자를 이용해 접근하거나 객체이름 뒤에 []를 붙이고 그 안에 속성 이름을 문자열로 넣어 접근할 수 있음.
var Person = {};
Person["age"] = 20;
Person["name"] = "소녀시대";
Person.mobile = '010-0000-0000';
Person.school = '순천향대학교'
console.log('나이: %d\n이름: %s\n전화: %s\n학교: %s', Person.age, Person.name, Person.mobile, Person.school)

// 자바스크립트는 함수 앞에 function 키워드를 붙임. 그리고 파라미터의 타입과 반환되는 값의 타입을 명시하지 않음.
function add(a, b) {
    var c = 0
    c = a + b
    console.log(c)
    return c
}

add(1, 3)

// 자바스크립트에서는 함수를 일급 객체 (First class object)로 다룸. 따라서, 함수가 변수에 할당 될 수 있음.
// 변수에 할당될 경우 두 가지 이름으로 함수를 호출할 수 있으므로 언래의 함수 이름을 생략하고 익명함수 (Anonymous Function)라고 부름.

var addFunction = function addTwo(a, b) { console.log(a + b) };
addFunction(10, 20)
// addTwo(10, 20)는 함수 이름이 삭제되었기에 실행이 불가.

function addThree(a, b) {
    return a + b
};

var addFunctionTwo = addThree(101, 10)
console.log(addFunctionTwo)

// 객체의 속성에 함수 할당
Person.add = function(a, b) {
    return a + b;
};

console.log("객체 할당: %d", Person.add(123, 123))

// 객체를 만들 때 속성 할당하기
var Add = {
    x: 200,
    y: 300,
    add: function(a, b) {
        return a + b
    }
};

console.log("객체 생성 할당:  %d", Add.add(Add.x, Add.y))
