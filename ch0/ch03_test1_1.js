/**
 * 3장 Test 1
 * 
 * 자바스크립트의 변수 타입
 */

 let obj1 = { k1 : 1}
 let k2 = Symbol("k2")
 let k3 = Symbol("k3")
 obj1[k2] = "value1"
 obj1[k3] = "value2"
 console.log(obj1) // { k1: 1, [Symbol(k2)]: 'value1', [Symbol(k3)]: 'value2' }
 console.log(Object.keys(obj1)) // [ 'k1' ]
 console.log(Object.getOwnPropertyNames(obj1)) // [ 'k1' ]
 for (const idx in obj1) {
 console.log(idx, obj1[idx]) // k1 1
 }
 console.log(Object.getOwnPropertySymbols(obj1)) // [ Symbol(k2), Symbol(k3) ]
 console.log(Object.getOwnPropertySymbols(obj1)[0] === k2) // true

 Object.getOwnPropertySymbols(obj1)[0] = 'k4';
 console.log(Object.getOwnPropertySymbols(obj1)[0]);  // Symbol(k2)
 console.log(Object.getOwnPropertySymbols(obj1)[0] === 'k4');  // flase

 obj1 = { k1 : 1};
 console.dir(obj1);
 console.log(Object.getOwnPropertySymbols(obj1)) // []