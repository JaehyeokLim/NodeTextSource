const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
// Promise 중 하나라도 reject가 되면 catch로 넘어감
// const promise3 = Promise.reject('실패1');
// Promise.all([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
    console.log("catch 실행");
  });
