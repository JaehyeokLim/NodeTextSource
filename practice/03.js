function syncFn_1() {
    console.log('1 - First Function');
    syncFn_2();
}

function syncFn_2() {
    console.log('2 - Second Function');
    syncFn_3();
}

function syncFn_3() {
    console.log('3 - Third Function');
}



function asyncFnfn_1() {
    console.log('1 - First Function');
    asyncFnfn_2();
}

function asyncFnfn_2() {
    setTimeout(function(){ console.log('2 - Second Function');}, 1000);
    asyncFnfn_3();
}

function asyncFnfn_3() {
    console.log('3 - Third Function');
}

syncFn_1()
asyncFnfn_1()

// 함수를 파라미터로 전달하기. 변수에 함수를 할당할 수 있으므로 함수를 호출할 때 파라미터로 다른 함수 전달 가능.

function add(a, b, callback) {
    var result = a + b;
    callback(result)
}

add(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});

// 함수에서 반환하는 값이 함수인 경우. 함수의 결과를 반환할 때 함수를 반환할 수 있음.

function returnAdd(a, b, callback) {
    var result = a + b;
    callback(result);

    var history = function() {
        return a + ' + ' + b + ' = ' + result;
    };

    return history;
}

var add_history = returnAdd(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 (10, 10)의 결과 : %d', result);
});

console.log('결과 값으로 받은 함수 실행 결과: ' + add_history());

// 함수에서 반환된 함수 안에서 변수에 접근하는 경우

function addTwo(a, b, callback) {
    var result = a + b;
    callback(result + 1);
    var count = 0;
    var history = function() {
        count++;
        return count + ': ' + a + ' + ' + b + ' = ' + result;
    }

    return history;
}

var add_historyTwo = addTwo(10, 10, function(result) {
    console.log('파라미터로 전달된 콜백 함수 호출됨.');
    console.log('더하기 결과: %d', result);
});