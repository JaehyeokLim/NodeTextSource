/**
 * 3장 Test 15
 *
 * 동기식 실행
 */

function loop() {
  const start = Date.now();
  for (var i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log("duration time : %d", end - start);
}
console.log("Hello");
loop();
console.log("Hello Again");
