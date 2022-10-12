var a = { name: name, age: age } // ES5
var a = { name, age } // ES2015

// In VS Code, find the variable name where it is showing deprecated name. 
// Put your cursor and right click on it, then select 'Go to Definition'. 
// It will open another file named as lib.dom.d.ts.
// Just remove the line "declare const name: void;"

/** @deprecated */
// declare const name: void;

// This will remove your variable name from the deprecated list.
