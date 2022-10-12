/**
 * 클래스
 */
 var alert = require('alert');   // npm i alert
 
 class User { 
	constructor(name) { 
		this.name = name; 
	} 
	sayHi() { 
		alert(this.name); 
	} 
 } 
	
 // 사용법: 
 let user = new User("John"); 
 user.sayHi();
	