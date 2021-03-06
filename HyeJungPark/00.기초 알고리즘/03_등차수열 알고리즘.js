// 등차수열(Arithmetic Sequence) : 연속하는 두 수의 차이가 일정한 수열

/* 문제 : 1부터 20까지의 정수 중 홀수의 합을 구하는 프로그램 */
// 1, 3, 5, 7, 9 ... 19 => 등차수열(일정한 간격이 있는 수열)

//[1] 입력
let sum = 0; // 합계가 담길 그릇을 0으로 초기화

//[2] 처리 : 1부터 20까지의 수 중, 2로 나누어 떨어지지 않는 수는 홀수이다.
let sequence = '';
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    sum += i; // 조건으로 홀수를 걸러 sum에 누적합산한다.
    sequence += i + ' ';
  }
}

//[3] 출력
console.log(sequence);
//1 3 5 7 9 11 13 15 17 19
// 등차수열의 시퀀스를 확인할 수 있다.
// 등차수열의 전체 합을 구하면 합계 알고리즘이 되는 것!

console.log(`1부터 20까지의 홀수의 합: ${sum}`);
// 1부터 20까지의 홀수의 합: 100
