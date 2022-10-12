/**
 * 3장 Test 1
 * 
 * 자바스크립트의 변수 타입
 */

var age = 20;
console.log('나이 : %d', age);

var name1 = '소녀시대';
console.log('이름 : %s', name1);

var sta = true;
console.log(sta);

var a;
console.log(a);

age = null;
console.log(age);

var key = Symbol('key');
var key1 = Symbol('key');
if(key===key1){
    console.log(true);
}
else{
    console.log(false);
}



var key = Symbol('key');
var key = Symbol('keies');
if(key===key){
    console.log(true);
}
else{
    console.log(false);
}

console.log(typeof key);
console.log(key);

key = 'key1';
console.log(key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);
obj[key] = 'value1';
console.log(obj[key]);

let mySymbol = Symbol('단지 설명이 들어감');

console.log(mySymbol);        // Symbol()
console.log(typeof mySymbol); // symbol


