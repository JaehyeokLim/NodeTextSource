const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
// for await of 예제
// (참고) await는 최상위 레벨 코드에서 작동하지 않지만
// 익명 async 함수로 코드를 감싸면 최상위 레벨 코드에도 await를 사용할 수 있다.
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
