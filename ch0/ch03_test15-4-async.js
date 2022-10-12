/**
 * 3장 Test 15
 *
 * 비동기식 처리
 */


function fn_1(){
  console.log('1 - First Function');
  fn_2();
}

function fn_2(){
  setTimeout(function(){ console.log('2 - Second Function');}, 1000);  // console.log('2 - Second Function');
  fn_3();
}

function fn_3(){
  console.log('3 - Third Function');
}

fn_1();