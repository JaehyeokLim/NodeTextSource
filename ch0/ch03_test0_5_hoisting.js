getX();

function getX() {
  // var x;
  console.log(x);
  console.log("marking");
  var x = 100; //선언은 hoisting되나 변수의 값은 끌어올려지지 않는다. //let, const로 변경하면 에러!!
  // x = 100;
  console.log(x);
}

//getX();
