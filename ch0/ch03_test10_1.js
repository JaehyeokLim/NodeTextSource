/**
 * 3장 Test 10
 * 
 * 배열 안의 모든 요소를 하나씩 확인하기
 * map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
 */

 var arr = ['가','나','다','라']; 
 arr.forEach(function(item,index,arr2)
 { 
	 console.log(item,index,arr2[index+1]); 
 })

 //첫번쨰 인수는 배열의 각각의 item 
 //두번쨰 인수는 배열의 index 
 //세번째 인수는 배열 그자체

 var arr3 = arr.map((item,index,arr2) => arr2[index+1]);
 console.log(arr3);
 console.log(arr.map((item,index,arr2) => arr2[index+1])); // 새로운 배열을 반환
 console.log(arr.forEach((item,index,arr2) => arr2[index+1])); // undefined를 반환
//  arr.map(function(item,index,arr2)
//  { 
// 	 console.log(item,index,arr2[index+1]); 
//  })