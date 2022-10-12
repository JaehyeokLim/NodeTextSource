// exports is a reference to module.exports.
// You can see that assigning properties to the exports object
// has added those properties to modules.exports.
exports.a = "A";
console.log(exports === module.exports);
console.log(module.exports);
