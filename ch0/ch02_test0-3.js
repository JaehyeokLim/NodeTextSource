// exports is not a reference to module.exports anymore.
// If you assign anything to module.exports, exports is not no longer a reference to it,
// and exports loses all its power.

module.exports = {
  greet: function (name) {
    console.log(`Hi ${name}!`);
  },

  farewell: function () {
    console.log("Bye!");
  },
};

console.log(exports === module.exports);
console.log(module.exports);
