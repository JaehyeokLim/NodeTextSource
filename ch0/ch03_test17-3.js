/**
 * 3장 Test 17
 *
 * lexical scope(정적스코프:어디서 호출하였는지가 아니라 어디서 선언하였는가에 따라 상위 스코프를 정한다)
 */

var text = "global";

function foo() {
  console.log(text);
}

function bar() {
  // var text = "bar";
  text = "bar";
  foo();
}

bar();
