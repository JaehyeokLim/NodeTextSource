function counter() {
  for (var i = 0; i < 10; i++) {
    console.log("i", i);
  }
  console.log("after loop i is", i); // 선언된 block 밖에서도 사용 가능
}
counter();
// console.log("i(함수 밖) ", i);
