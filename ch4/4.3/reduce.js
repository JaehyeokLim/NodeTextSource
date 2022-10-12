// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

a = [1, 2, 3];
result = a.reduce((acc, cur, i) => {
    console.log(acc, cur, i);
    return acc + cur;
  }, 0);
console.log(result);