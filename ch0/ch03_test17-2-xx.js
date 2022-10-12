/**
 * 3장 Test 17
 *
 * 클로저, lexical scope
 */

function foo() {
  var apple = "apple";
  function sayApple() {
    console.log(apple);
  }
  return sayApple;
}

var printApple = foo();
printApple();
