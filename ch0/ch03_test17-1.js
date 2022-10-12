/**
 * 3장 Test 17
 *
 * 클로저, lexical scope
 */

function outer() {
  var a = "test";
  function inner() {
    var b = "inner";
    console.log("a = %s", a);
    return b;
  }
  //console.log(b);
  return inner;
}

var f = outer();
console.log(f);
f();
