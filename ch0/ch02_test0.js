// module은 현재의 파일을 가리킨다.
// require()함수는 module.exports를 return한다.
// var require = function(src){                 //line 1
//     var fileAsStr = readFile(src)            //line 2
//     var module.exports = {}                  //line 3
//     eval(fileAsStr)                          //line 4
//     return module.exports                    //line 5
// }

console.log(module);
