/**
 * 4장 Calc3
 *
 * 모듈
 * 더하기 함수가 들어있는 calc3 모듈
 */

var util = require("util"); // inherits 사용하기 위해
var EventEmitter = require("events").EventEmitter; // emit을 사용하기 위해

// Calc는 prototype 객체로 생성
var Calc = function () {
  var self = this;

  this.on("stop", function () {
    console.log("Calc에 stop event 전달됨.");
  });

  // this.title = "calculator"

};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function (a, b) {
  return a + b;
};

//console.log(module);

module.exports = Calc;
module.exports.title = "calculator";
// console.log(module);
