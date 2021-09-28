// 1. 세개의 파라미터를 더한 후 결과값을 리턴하는 함수를 선언
function sum(param1, param2, param3){
    return param1 + param2 + param3;
}

// 2. 함수 실행 후 결과값을 result 에 대입
let result = sum(1,2,3);

// 3. result 에 담긴 결과값을 출력
console.log('result='+result);

// 4. 결과값이 없는 함수의 선언
function printA(param1){
    console.log('param1='+param1);
}

// 5. 함수호출 : return 이 없는 함수는 로직을 자체적으로 처리하기 때문에 결과값 대입 불필요
printA('출력내용');
