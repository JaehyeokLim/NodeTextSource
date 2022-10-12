// exports is a reference to module.exports.

exports.greet = function (name) {
  console.log(`Hi ${name}!`);
};

exports.farewell = function () {
  console.log("Bye!");
};

console.log(exports === module.exports);
console.log(module.exports);
